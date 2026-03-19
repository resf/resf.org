import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Table from "@/components/become-sponsor/Table";
import Footer from "@/components/Footer";

import { menuItems, actionItems } from "@/config/menu";

import type { GetStaticProps, NextPage } from "next";
import type { NavItems } from "@/types/navigation/NavItem";
import type { NavActionItems } from "@/types/navigation/NavActionItem";
import BasicPageTitle from "@/components/common/BasicPageTitle";
import PageTitle from "@/components/common/PageTitle";

interface BecomeSponsorProps {
  menuItems?: {
    menuItems: NavItems;
    actionItems: NavActionItems;
  };
}

const BecomeSponsor: NextPage<BecomeSponsorProps> = ({ menuItems }) => {
  const { t: tCommon } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Become a Sponsor | {tCommon("orgName")}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        {menuItems && <Header menu={menuItems} />}
        <PageTitle
          title="Become a sponsor"
          description="Sponsorship is open to any company or organization who values what we do and would like to support the Foundation and Projects. Sponsorships come with some great perks and your contribution doesn't have to be public if you don't wish for it to be."
          link="mailto:sponsors@resf.org"
          linkTitle="Email Us"
        />
        <BasicPageTitle>Sponsorship Tiers</BasicPageTitle>
        <Table />
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
      menuItems: menuItems,
      actionItems: actionItems,
    },
  },
});

export default BecomeSponsor;
