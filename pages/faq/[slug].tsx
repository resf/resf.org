import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import * as faq from "@/config/faq";

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";

import {
  projectDropdownItems,
  menuItems,
  aboutDropdownItems,
  actionItems,
} from "@/config/menu";

import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import type { NavItems } from "@/types/navigation/NavItem";
import type { NavActionItems } from "@/types/navigation/NavActionItem";
import type { ParsedUrlQuery } from "querystring";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export interface IndexProps {
  menuItems?: {
    projectItems: NavItems;
    menuItems: NavItems;
    aboutItems: NavItems;
    actionItems: NavActionItems;
  };
  faqData?: typeof faq.allFaq[0];
}

const FAQItemPage: NextPage = ({ menuItems, faqData }: IndexProps) => {
  const { t: tCommon } = useTranslation("common");
  const { t } = useTranslation("faq");

  return (
    <>
      <Head>
        <title>{`${faqData?.question} - ${tCommon("orgName")}`}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        {menuItems && <Header menu={menuItems} />}
        <div className="max-w-7xl mx-auto mt-20">
          <div className="my-6 ml-6">
            <Link href="/faq" className="flex gap-x-1 text-rockyGreen">
              <ChevronLeftIcon className="w-4" />
              <span>{t("backtofaq")}</span>
            </Link>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 font-display ml-6">
            {faqData?.question}
          </h1>
          <div
            className="mt-10 ml-6 pr-6"
            dangerouslySetInnerHTML={{ __html: faqData?.answer || "" }}
          />
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: "blocking",
    paths: faq.slugs.map((slug) => ({ params: { slug } })),
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async ({ locale, params }) => {
  const { slug } = params as IParams;

  const faqData = faq.allFaq.find((item) => item.slug === slug);

  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : "en", [
        "common",
        "coming-soon",
        "faq",
      ])),
      menuItems: {
        projectItems: projectDropdownItems,
        menuItems: menuItems,
        aboutItems: aboutDropdownItems,
        actionItems: actionItems,
      },
      faqData,
    },
  };
};

export default FAQItemPage;
