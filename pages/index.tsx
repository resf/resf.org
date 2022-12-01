import Head from "next/head";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";

import Header from '../components/Header';
import Layout from '../components/Layout';

import type { GetStaticProps, NextPage } from "next";

const Index: NextPage = () => {
  const { t: tCommon } = useTranslation("common");
  const { t } = useTranslation("coming-soon");

  return (
    <>
      <Head>
        <title>{tCommon("orgName")}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        <Header />
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
  },
});

export default Index;
