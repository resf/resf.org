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

export interface JoinUsProps {
  menuItems?: {
    projectItems: NavItems;
    menuItems: NavItems;
    aboutItems: NavItems;
    actionItems: NavActionItems;
  };
}

const JoinUs: NextPage = ({ menuItems }: JoinUsProps) => {
  const { t: tCommon } = useTranslation("common");
  // TODO: Create about translation file
  // const { t } = useTranslation("coming-soon");

  return (
    <>
      <Head>
        <title>{`Join Us | ${tCommon("orgName")}`}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        {menuItems && <Header menu={menuItems} />}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white">
            <div className="pt-16 px-6 sm:pt-24 lg:flex lg:justify-between lg:px-8">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl font-display">
                  Join Us
                </h2>
                <h3 className="mt-10 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl font-display">
                  Be in the know and have a say
                </h3>
                <p className="mt-2 text-base">
                  You get to take part in leadership decisions and presentations
                  on what is happening, see what is on the horizon, be aware of
                  new things that are coming with other Projects, and have a
                  formal voice with the RESF.
                </p>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl font-display">
                  Choose your role
                </h3>
                <p className="mt-2 text-base">
                  Have a direct path to become a Team Lead/Deputy, Officer,
                  Project Board Member, RESF Board Member, or a Board Chair.
                  Every level of the organization is available to Members.
                </p>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl font-display">
                  Bragging rights
                </h3>
                <p className="mt-2 text-base">
                  You can put on your resume, CV, or LinkedIn that you are part
                  of one of the fastest growing initiatives that most large
                  organizations worldwide are aware of.
                </p>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl font-display">
                  SWAG!
                </h3>
                <p className="mt-2 text-base">
                  You will have access to specific Membership swag (stickers,
                  T-shirts, hats, etc.)
                </p>
                <h3 className="mt-4 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl lg:text-3xl font-display">
                  Community
                </h3>
                <p className="mt-2 text-base">
                  You will be invited to take part in conferences, user groups,
                  and meetups to represent the RESF and Projects officially to
                  the greater community.
                </p>
              </div>
            </div>
            <div className="py-8 px-6 sm:py-12 lg:flex lg:justify-between lg:px-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl font-display">
                  Steps to become a member
                </h2>
                <ol className="mt-4 list-decimal list-inside">
                  <li>
                    Get on IRC or Mattermost (
                    <a
                      className="font-semibold text-blue-500"
                      href="https://chat.rockylinux.org"
                    >
                      https://chat.rockylinux.org
                    </a>
                    ) and/or our Discourse forum (
                    <a
                      className="font-semibold text-blue-500"
                      href="https://forums.rockylinux.org"
                    >
                      https://forums.rockylinux.org
                    </a>
                    ).
                  </li>
                  <li>
                    Participate in discussions in channels that interest you.
                  </li>
                  <li>
                    Become an active contributor to a Project or Project Team by
                    interacting and helping others.
                  </li>
                  <li>
                    Complete an application form for the Project or Project
                    Team.
                  </li>
                  <li>
                    The Project Board will review the application and either
                    approve or disapprove the application based on a majority
                    vote of the Project Board.
                  </li>
                </ol>
              </div>
            </div>
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
    ])),
    menuItems: {
      projectItems: projectDropdownItems,
      menuItems: menuItems,
      actionItems: actionItems,
    },
  },
});

export default JoinUs;
