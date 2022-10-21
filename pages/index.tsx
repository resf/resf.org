import Head from "next/head";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation, Trans } from "next-i18next";

import Logo from "../public/icon-text.svg";

import type { GetStaticProps, NextPage } from "next";

const Index: NextPage = () => {
  const { t: tCommon } = useTranslation("common");
  const { t } = useTranslation("coming-soon");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>{tCommon("orgName")}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="mb-6">
          <Image src={Logo} alt="RESF Logo" className="h-24" />
        </div>
        <h1
          className="text-6xl font-semibold font-display"
          dangerouslySetInnerHTML={{
            __html: t("somethingexcitingcoming", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
        <p className="mt-6 text-2xl text-gray-700">
          {t("workonbringingwebsite")}
        </p>
        <p
          className="mt-3 text-2xl text-gray-700"
          dangerouslySetInnerHTML={{
            __html: t("visitrockylinux", {
              interpolation: { escapeValue: false },
            }),
          }}
        />
      </main>
    </div>
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
