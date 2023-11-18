import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import * as newsLib from "@/lib/newsLib";

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";

import { projectDropdownItems, menuItems, actionItems } from "@/config/menu";

import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { ParsedUrlQuery } from "querystring";
import type { NavItems } from "@/types/navigation/NavItem";
import type { NavActionItems } from "@/types/navigation/NavActionItem";
import type { NewsItem } from "@/types/news/News";
import { useNewsItem } from "@/hooks/useNewsItem";
import { MDXRemote } from "next-mdx-remote";

export interface NewsPageProps {
  menuItems?: {
    projectItems: NavItems;
    menuItems: NavItems;
    aboutItems: NavItems;
    actionItems: NavActionItems;
  };
  slug?: string;
  newsData?: NewsItem;
}

const NewsPage: NextPage = ({ menuItems, slug, newsData }: NewsPageProps) => {
  const { t: tCommon } = useTranslation("common");
  const { newsItem, newsItemError, newsItemIsLoading, newsItemContent } =
    useNewsItem(slug!);

  return (
    <>
      <Head>
        <title>{`${newsItem?.title ?? "News Article"} - ${tCommon(
          "orgName"
        )}`}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        {menuItems && <Header menu={menuItems} />}
        <div className="max-w-7xl mx-auto mt-20 px-10 prose">
          {newsItemContent && (
            <MDXRemote
              compiledSource={newsItemContent.compiledSource}
              scope={newsItemContent.scope}
              frontmatter={newsItemContent.frontmatter}
            />
          )}
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const news = await newsLib.getNews();
  const slugs = news?.map((newsItem) => newsItem.slug);

  return {
    fallback: "blocking",
    paths: slugs?.map((slug) => ({ params: { slug } })) ?? [],
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const { slug } = params as IParams;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const newsItem = await newsLib.getNewsItem(slug);

  const props: any = {
    ...(await serverSideTranslations(locale ? locale : "en", [
      "common",
      "coming-soon",
      "faq",
    ])),
    menuItems: {
      projectItems: projectDropdownItems,
      menuItems: menuItems,
      actionItems: actionItems,
    },
    slug,
  };

  if (newsItem) {
    props.newsData = newsItem;
  }

  return {
    props,
  };
};

export default NewsPage;
