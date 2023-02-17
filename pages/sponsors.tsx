import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";

import { menuItems, actionItems } from "@/config/menu";

import type { GetStaticProps, NextPage } from "next";
import type { NavItems } from "@/types/navigation/NavItem";
import type { NavActionItems } from "@/types/navigation/NavActionItem";

export interface SponsorsProps {
  menuItems?: {
    menuItems: NavItems;
    actionItems: NavActionItems;
  };
}

const t1sponsors = [
  {
    name: "CIQ",
    founding: true,
    description:
      "We believe in helping people do great things. This is why CIQ is a founding sponsor of the RESF. We provide commercial support and services for Rocky Linux to customers in research, academia, government, enterprise, partners, and everyone in between.",
    href: "https://ciq.co/products/rocky-linux/",
    logoUrl: "/images/sponsors/ciq.png",
  },
  {
    name: "45Drives",
    description:
      "45Drives offers enterprise storage solutions built on powerful and robust open-source software that allows customers to benefit from the cost savings & flexibility of off-the-shelf hardware. Check them out for a fully supported data storage solution at the best cost per terabyte!",
    href: "https://45drives.com",
    logoUrl: "/images/sponsors/45drives.png",
  },
  {
    name: "Amazon Web Services",
    description:
      "The RESF utilizes AWS to run much of the underlying infrastructure critical to the development and deployment of the services supporting Rocky Linux. From Koji builders for x86_64 and aarch64 running in EC2 to SRPM blob storage in S3, AWS is foundational to much of what we do.",
    href: "https://aws.com/",
    logoUrl: "/images/sponsors/aws.png",
  },
  {
    name: "Google Cloud",
    description:
      "A a principal sponsor of the RESF, Google understands the importance of Rocky Linux as a free, open, community enterprise operating system. Providing resources for testing and validation, we've partnered with the RESF to ensure Rocky's status as a first-class citizen on the Google Cloud Platform from day one.",
    href: "https://cloud.google.com/",
    logoUrl: "/images/sponsors/gcp.png",
  },
  {
    name: "OpenDrives",
    description:
      "OpenDrives is a global provider of enterprise-scale, software-defined data storage solutions. Our technology is designed to power the most demanding workflows—on premises and in the cloud. Our commitment to open standards and protocols facilitates ease of integrations, making it simpler for customers to access, use, move, and protect their data. We are headquartered in Culver City, CA.",
    href: "https://opendrives.com/",
    logoUrl: "/images/sponsors/opendrives.png",
  },
  {
    name: "Rakutan Symphony",
    description:
      "Rakuten Symphony is a strong believer that open source communities encourage innovation through collaboration. Deployment of Rocky Linux represents a return to true open-source principles, powered by open communities. Rakuten Symphony is working closely with a broad spectrum of third-party vendors and technology partners within the telecom industry to make Rocky Linux the standard operating system for running large networks.",
    href: "https://symphony.rakuten.com/",
    logoUrl: "/images/sponsors/rakutan-symphony.png",
  },
  {
    name: "VMware",
    description:
      "VMware is a leading provider of multi-cloud services for all apps, enabling digital innovation with enterprise control.",
    href: "https://vmware.com/",
    logoUrl: "/images/sponsors/vmware.png",
  },
];

const t4sponsors = [
  {
    name: "OpenLogic",
    href: "https://www.openlogic.com/",
    logoUrl: "/images/sponsors/openlogic.svg",
  },
  {
    name: "ProComputers.com",
    href: "https://www.procomputers.com/",
    logoUrl: "/images/sponsors/procomputers.png",
  },
  {
    name: "Stromasys",
    href: "https://stromasys.com/",
    logoUrl: "/images/sponsors/stromasys.png",
  },
];

const Sponsors: NextPage = ({ menuItems }: SponsorsProps) => {
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
                  Sponsors
                </h2>
                <p className="mt-7 text-lg">
                  We would like to thank our sponsors for their support thus far
                  on the Projects.
                </p>
                <div className="mt-7">
                  <a
                    href="mailto:sponsors@resf.org"
                    className="inline-flex bg-blue-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-green-700 hover:bg-blue-800 hover:ring-blue-800"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="bg-white pb-16 sm:pb-24">
            <div>
              <div className="mx-auto divide-y divide-gray-900/10">
                <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                  <Disclosure defaultOpen as="div" className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-2xl font-bold leading-7 font-display ml-4 lg:ml-7">
                              Tier 1 - Principal Sponsors
                            </span>
                            <span className="ml-6 flex h-7 items-center mr-4 lg:mr-7">
                              {open ? (
                                <ChevronUpIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <ChevronDownIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                            {t1sponsors.map((sponsor) => (
                              <a
                                href={sponsor.href}
                                key={sponsor.name}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <div className="flex flex-col overflow-hidden ml-7">
                                  <div className="flex-shrink-0">
                                    <picture>
                                      <img
                                        className="p-10 object-fit pointer-events-none bg-gray-50"
                                        src={sponsor.logoUrl}
                                        alt={sponsor.name}
                                      />
                                    </picture>
                                  </div>
                                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                    <div className="flex-1">
                                      <span className="flex items-center gap-x-3">
                                        <p className="text-xl font-semibold text-gray-900">
                                          {sponsor.name}
                                        </p>
                                        {sponsor.founding && (
                                          <div>
                                            <span className="text-xs border border-green-600 bg-rockyGreen text-white rounded-lg px-2 py-0.5">
                                              Founding Sponsor
                                            </span>
                                          </div>
                                        )}
                                      </span>
                                      <p className="mt-3 text-base text-gray-500">
                                        {sponsor.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure defaultOpen as="div" className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-2xl font-bold leading-7 font-display ml-4 lg:ml-7">
                              Tier 4
                            </span>
                            <span className="ml-6 flex h-7 items-center mr-4 lg:mr-7">
                              {open ? (
                                <ChevronUpIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <ChevronDownIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                            {t4sponsors.map((sponsor) => (
                              <a
                                href={sponsor.href}
                                key={sponsor.name}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <div className="flex flex-col overflow-hidden ml-7">
                                  <div className="flex-shrink-0">
                                    <picture>
                                      <img
                                        className="p-10 object-fit pointer-events-none bg-gray-50"
                                        src={sponsor.logoUrl}
                                        alt=""
                                      />
                                    </picture>
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </dl>
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

export default Sponsors;
