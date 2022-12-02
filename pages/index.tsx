import Head from "next/head";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";

import Header from "../components/Header";
import Layout from "../components/Layout";

import { projectDropdownItems, aboutDropdownItems } from "@/config/menu";

import type { GetStaticProps, NextPage } from "next";
import type { DropdownItems } from "@/types/DropdownItem";

export interface IndexProps {
  menuItems?: { projectItems: DropdownItems; aboutItems: DropdownItems };
}

const Index: NextPage = ({ menuItems }: IndexProps) => {
  const { t: tCommon } = useTranslation("common");
  const { t } = useTranslation("coming-soon");

  return (
    <>
      <Head>
        <title>{tCommon("orgName")}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>{menuItems && <Header menu={menuItems} />}</Layout>
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
      aboutItems: aboutDropdownItems,
    },
  },
});

export default Index;
