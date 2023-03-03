import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import BoardStructure from "public/images/faq/RESF_Board_Structure.webp";
import Footer from "@/components/Footer";

import { projectDropdownItems, menuItems, actionItems } from "@/config/menu";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";

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

const FAQBoardStructure: NextPage = ({ menuItems }: IndexProps) => {
  const { t: tCommon } = useTranslation("common");
  const { t } = useTranslation("faq");

  return (
    <>
      <Head>
        <title>{`What does the RESF board structure look like? - ${tCommon(
          "orgName"
        )}`}</title>
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
            What does the RESF board structure look like?
          </h1>
          <div className="mt-10 ml-6 pr-6">
            <div className="flex flex-col gap-y-5 max-w-4xl">
              <p>
                There is a structure of boards, with a summary as depicted in
                this image:
              </p>
              <div>
                <Image src={BoardStructure} alt="Board Structure" />
              </div>
              <p>
                All board seats are voted by peers based only on merit. No board
                seats are ever purchased or bought, and no single company can
                represent more than 1/3rd of any voting board.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
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
        actionItems: actionItems,
      },
    },
  };
};

export default FAQBoardStructure;
