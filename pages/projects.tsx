import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";

import { menuItems, actionItems } from "@/config/menu";

import type { GetStaticProps, NextPage } from "next";
import type { NavItems } from "@/types/navigation/NavItem";
import type { NavActionItems } from "@/types/navigation/NavActionItem";
import Feature from "@/components/projects/Feature";
import PageTitle from "@/components/common/PageTitle";

export interface ProjectsProps {
  menuItems?: {
    menuItems: NavItems;
    actionItems: NavActionItems;
  };
}

const Projects: NextPage = ({ menuItems }: ProjectsProps) => {
  const { t: tCommon } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{tCommon("orgName")}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        {menuItems && <Header menu={menuItems} />}
        <PageTitle
          title="Projects"
          description="The RESF was created for more than just Rocky Linux. No association is necessary to join the RESF and new Projects are in formation. Projects do not even need to be Linux-related, but they must be open-source under an OSI approved license with a preference towards non-copyleft. The RESF welcomes any open-source projects that needs a neutral ground to operate. The first step to having a project considered is to become a member."
          link="https://www.resf.org/join-us"
          linkTitle="Become a Member"
        />
        <div>
          <Feature />
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
    ])),
    menuItems: {
      menuItems: menuItems,
      actionItems: actionItems,
    },
  },
});

export default Projects;
