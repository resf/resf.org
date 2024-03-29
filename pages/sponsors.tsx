import Head from "next/head";
import PageTitle from "@/components/common/PageTitle";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useSponsorTiers } from "@/hooks/useSponsorTiers";
import * as sponsorTiersLib from "@/lib/sponsorTiersLib";

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import SponsorsList from "@/components/sponsors/SponsorsList";
import SponsorItem from "@/components/sponsors/SponsorItem";
import Footer from "@/components/Footer";

import { menuItems, actionItems } from "@/config/menu";

import type { GetStaticProps, NextPage } from "next";
import type { NavItems } from "@/types/navigation/NavItem";
import type { NavActionItems } from "@/types/navigation/NavActionItem";
import type { Tiers } from "@/types/sponsors/Tier";

export interface SponsorsProps {
  menuItems?: {
    menuItems: NavItems;
    actionItems: NavActionItems;
  };
  staleSponsorTiers?: Tiers | null;
}

const Sponsors: NextPage = ({
  menuItems,
  staleSponsorTiers,
}: SponsorsProps) => {
  const { t: tCommon } = useTranslation("common");
  const { allSponsors } = useSponsorTiers(staleSponsorTiers);

  return (
    <>
      <Head>
        <title>{tCommon("orgName")}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        {menuItems && <Header menu={menuItems} />}
        <PageTitle
          title="Sponsors"
          description="We would like to thank our sponsors for their support thus far on the Projects."
          link="/become-sponsor"
          linkTitle="Learn More"
        />
        <SponsorsList>
          {allSponsors.map((sponsor) => (
            <SponsorItem key={sponsor.name} {...sponsor} />
          ))}
        </SponsorsList>
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
    staleSponsorTiers: (await sponsorTiersLib.getSponsorTiersServer()) ?? null,
  },
});

export default Sponsors;
