import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Hero from "@/components/homepage/Hero";
import Feature from "@/components/homepage/Feature";
import Footer from "@/components/Footer";

import { projectDropdownItems, menuItems, actionItems } from "@/config/menu";

import type { GetStaticProps, NextPage } from "next";
import type { NavItems } from "@/types/navigation/NavItem";
import type { NavActionItems } from "@/types/navigation/NavActionItem";
import Principles from "@/components/homepage/Principles";

export interface IndexProps {
  menuItems?: {
    projectItems: NavItems;
    menuItems: NavItems;
    actionItems: NavActionItems;
  };
}

const Index: NextPage = ({ menuItems }: IndexProps) => {
  const { t: tCommon } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{tCommon("orgName")}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        {menuItems && <Header menu={menuItems} />}
        <Hero />
        <Principles />
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
    ])),
    menuItems: {
      projectItems: projectDropdownItems,
      menuItems: menuItems,
      actionItems: actionItems,
    },
  },
});

export default Index;
