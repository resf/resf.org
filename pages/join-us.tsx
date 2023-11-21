import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import JoinUsColoredBox from "@/components/join-us/JoinUsColoredBox";
import JoinUsBox from "@/components/join-us/JoinUsBox";
import Footer from "@/components/Footer";

import { menuItems, actionItems } from "@/config/menu";

import type { GetStaticProps, NextPage } from "next";
import type { NavItems } from "@/types/navigation/NavItem";
import type { NavActionItems } from "@/types/navigation/NavActionItem";

export interface JoinUsProps {
  menuItems?: {
    menuItems: NavItems;
    aboutItems: NavItems;
    actionItems: NavActionItems;
  };
}

const JoinUs: NextPage = ({ menuItems }: JoinUsProps) => {
  // const { t: tCommon } = useTranslation("common");
  // TODO: Create about translation file
  // const { t } = useTranslation("coming-soon");

  return (
    <>
      <Head>
        <title>{`Join the Rocky Enterprise Software Foundation (RESF) | ${tCommon(
          "orgName"
        )}`}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        {menuItems && <Header menu={menuItems} />}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white">
            <div className="pt-16 px-6 sm:pt-24 lg:px-8">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl font-display">
                  Join the Rocky Enterprise Software Foundation (RESF)
                </h2>
                <JoinUsColoredBox>
                  <JoinUsBox
                    title="Be in the know and have a say"
                    icon="/images/join-us/InTheKnow.svg"
                  >
                    You get to take part in leadership decisions and
                    presentations on what is happening, see what is on the
                    horizon, be aware of new things that are coming with other
                    Projects, and have a formal voice with the RESF.
                  </JoinUsBox>
                  <JoinUsBox
                    title="Choose your role"
                    icon="/images/join-us/ChooseYourRole.svg"
                  >
                    Have a direct path to become a Team Lead/Deputy, Officer,
                    Project Board Member, RESF Board Member, or a Board Chair.
                    Every level of the organization is available to Members.
                  </JoinUsBox>
                  <JoinUsBox
                    title="Bragging rights"
                    icon="/images/join-us/BraggingRights.svg"
                  >
                    You can put on your resume, CV, or LinkedIn that you are
                    part of one of the fastest growing initiatives that most
                    large organizations worldwide are aware of.
                  </JoinUsBox>
                  <JoinUsBox title="SWAG!" icon="/images/join-us/Swag.svg">
                    You will have access to specific Membership swag (stickers,
                    T-shirts, hats, etc.)
                  </JoinUsBox>
                  <JoinUsBox
                    title="Community"
                    icon="/images/join-us/Community.svg"
                    className="md:px-32"
                    innerPadding
                    larger
                    spanRow
                  >
                    You will be invited to take part in conferences, user
                    groups, and meetups to represent the RESF and Projects
                    officially to the greater community.
                  </JoinUsBox>
                </JoinUsColoredBox>
              </div>
            </div>
            <div className="py-8 px-6 sm:py-12 lg:flex lg:justify-between lg:px-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl font-display">
                  Steps to become a member
                </h2>
                <ol className="mt-4 list-decimal list-inside marker:font-bold marker:text-[1.375rem]">
                  <li>
                    <span className="pl-2">
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
                    </span>
                  </li>
                  <li>
                    <span className="pl-2">
                      Participate in discussions in channels that interest you.
                    </span>
                  </li>
                  <li>
                    <span className="pl-2">
                      Become an active contributor to a Project or Project Team
                      by interacting and helping others.
                    </span>
                  </li>
                  <li>
                    <span className="pl-2">
                      Complete an application form for the Project or Project
                      Team.
                    </span>
                  </li>
                  <li>
                    <span className="pl-2">
                      The Project Board will review the application and either
                      approve or disapprove the application based on a majority
                      vote of the Project Board.
                    </span>
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
      menuItems: menuItems,
      actionItems: actionItems,
    },
  },
});

export default JoinUs;
