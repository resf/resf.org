import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";

import { projectDropdownItems, menuItems, actionItems } from "@/config/menu";

import type { GetStaticProps, NextPage } from "next";
import type { NavItems } from "@/types/navigation/NavItem";
import type { NavActionItems } from "@/types/navigation/NavActionItem";
import Feature from "@/components/homepage/Feature";
import BasicPageTitle from "@/components/common/BasicPageTitle";

export interface IndexProps {
  menuItems?: {
    projectItems: NavItems;
    menuItems: NavItems;
    actionItems: NavActionItems;
  };
}

const Projects: NextPage = ({ menuItems }: IndexProps) => {
  const { t: tCommon } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{tCommon("orgName")}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        {menuItems && <Header menu={menuItems} />}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white">
            <div className="py-16 px-6 sm:py-24 lg:flex lg:justify-between lg:px-8">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl font-display">
                  Projects
                </h2>
                <p className="mt-7 text-lg">
                  The RESF was created for more than just Rocky Linux. No
                  association is necessary to join the RESF and new Projects are
                  in formation. Projects do not even need to be Linux-related,
                  but they must be open-source under an OSI approved license
                  with a preference towards non-copyleft.
                </p>
                <p className="mt-4 text-lg">
                  The RESF welcomes any open-source projects that need a neutral
                  ground to operate. The first step to having a project
                  considered is to become a member.
                </p>
                <div className="mt-7">
                  <a
                    href="https://github.com/rocky-linux/peridot"
                    className="inline-flex bg-blue-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-green-700 hover:bg-green-800 hover:ring-green-800"
                  >
                    Become a Member
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-24 px-6 lg:px-8 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl font-display max-w-7xl mx-auto">
            Current Projects
          </h2>
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
      projectItems: projectDropdownItems,
      menuItems: menuItems,
      actionItems: actionItems,
    },
  },
});

export default Projects;
