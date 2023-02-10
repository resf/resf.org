import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import * as faq from "@/config/faq";

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import BasicPageTitle from "@/components/common/BasicPageTitle";
import FAQ from "@/components/faq/FAQ";
import Footer from "@/components/Footer";

import {
  projectDropdownItems,
  menuItems,
  aboutDropdownItems,
  actionItems,
} from "@/config/menu";

import type { GetStaticProps, NextPage } from "next";
import type { NavItems } from "@/types/navigation/NavItem";
import type { NavActionItems } from "@/types/navigation/NavActionItem";

export interface IndexProps {
  menuItems?: {
    projectItems: NavItems;
    menuItems: NavItems;
    aboutItems: NavItems;
    actionItems: NavActionItems;
  };
}

const FAQPage: NextPage = ({ menuItems }: IndexProps) => {
  const { t: tCommon } = useTranslation("common");
  const { t } = useTranslation("faq");

  return (
    <>
      <Head>
        <title>{tCommon("orgName")}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        {menuItems && <Header menu={menuItems} />}
        <div className="max-w-7xl mx-auto">
          <BasicPageTitle>{t("faq")}</BasicPageTitle>
          <div className="mx-5">
            <FAQ>
              <FAQ.Group title={t("about")}>
                {faq.about.map((faq) => (
                  <FAQ.Item key={faq.slug} slug={faq.slug}>
                    {faq.question}
                  </FAQ.Item>
                ))}
              </FAQ.Group>
              <FAQ.Group title={t("bylaws")}>
                {faq.byLaws.map((faq) => (
                  <FAQ.Item key={faq.slug} slug={faq.slug}>
                    {faq.question}
                  </FAQ.Item>
                ))}
              </FAQ.Group>
              <FAQ.Group title={t("board-of-directors")}>
                {faq.BOD.map((faq) => (
                  <FAQ.Item key={faq.slug} slug={faq.slug}>
                    {faq.question}
                  </FAQ.Item>
                ))}
              </FAQ.Group>
              <FAQ.Group title={t("projects")}>
                {faq.projects.map((faq) => (
                  <FAQ.Item key={faq.slug} slug={faq.slug}>
                    {faq.question}
                  </FAQ.Item>
                ))}
              </FAQ.Group>
              <FAQ.Group title={t("members")}>
                {faq.members.map((faq) => (
                  <FAQ.Item key={faq.slug} slug={faq.slug}>
                    {faq.question}
                  </FAQ.Item>
                ))}
              </FAQ.Group>
            </FAQ>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
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
  },
});

export default FAQPage;
