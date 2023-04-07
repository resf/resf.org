import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { sponsors } from "@/config/sponsors";
import * as sponsorsUtils from "@/utils/sponsorsUtils";

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import TierList from "@/components/sponsors/TierList";
import TierItem from "@/components/sponsors/TierItem";
import SponsorsHeading from "@/components/sponsors/SponsorsHeading";
import SponsorItem from "@/components/sponsors/SponsorItem";
import Footer from "@/components/Footer";

import { menuItems, actionItems } from "@/config/menu";

import type { GetStaticProps, NextPage } from "next";
import type { NavItems } from "@/types/navigation/NavItem";
import type { NavActionItems } from "@/types/navigation/NavActionItem";
import type { SponsorsConfig } from "@/types/sponsors/SponsorsConfig";
import PageTitle from "@/components/common/PageTitle";

export interface SponsorsProps {
  menuItems?: {
    menuItems: NavItems;
    actionItems: NavActionItems;
  };
  sponsorsConfig?: SponsorsConfig;
}

const Sponsors: NextPage = ({ menuItems, sponsorsConfig }: SponsorsProps) => {
  const { t: tCommon } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{tCommon("orgName")}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        {menuItems && <Header menu={menuItems} />}
        <PageTitle title="Sponsors" description="We would like to thank our sponsors for their support thus far on the Projects." link="/become-sponsor" linkTitle="Learn More" />
        <TierList>
          {sponsorsConfig?.tiers
            .sort(sponsorsUtils.sortTiers("ASC"))
            .map((tier) => (
              <TierItem key={tier.name} name={tier.name}>
                {tier.sponsors.map((sponsor) => {
                  return (
                    <SponsorItem
                      key={sponsor.name}
                      {...sponsor}
                      hasLogo={tier.hasLogo}
                      hasDescription={tier.hasDescription}
                    />
                  );
                })}
              </TierItem>
            ))}
        </TierList>
        <Footer />
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<SponsorsProps> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ? locale : "en", [
      "common",
      "coming-soon",
    ])),
    menuItems: {
      menuItems: menuItems,
      actionItems: actionItems,
    },
    sponsorsConfig: sponsors,
  },
});

export default Sponsors;
