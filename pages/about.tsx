import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

import Image from "next/image";
import Charter from "@/components/charter-bylaws/Charter";
import Bylaws from "@/components/charter-bylaws/Bylaws";

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";

import { menuItems, actionItems } from "@/config/menu";
import { board } from "@/config/board";

import type { GetStaticProps, NextPage } from "next";
import type { NavItems } from "@/types/navigation/NavItem";
import type { NavActionItems } from "@/types/navigation/NavActionItem";

export interface AboutProps {
  menuItems?: {
    menuItems: NavItems;
    actionItems: NavActionItems;
  };
}

const About: NextPage = ({ menuItems }: AboutProps) => {
  const { t: tCommon } = useTranslation("common");
  // TODO: Create about translation file
  // const { t } = useTranslation("coming-soon");

  return (
    <>
      <Head>
        <title>{`About | ${tCommon("orgName")}`}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        {menuItems && <Header menu={menuItems} />}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white">
            <div className="py-16 px-6 sm:py-24 lg:flex lg:justify-between lg:px-8">
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl font-display">
                  About RESF
                </h2>
                <p className="mt-5 text-xl text-gray-500">
                  What we&apos;ve created with the RESF is an organizational
                  body designed to help open-source projects thrive with a
                  structure that ensures a balanced and fair distribution of
                  community control while specifically enabling enterprise
                  use-cases, vendors, and commercial entities. Our charter and
                  bylaws set forth an inclusive management framework,
                  commitment, and accountability to ensure the longevity and
                  success of our hosted open-source projects and their
                  respective communities.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white pb-16 sm:pb-24">
            <div className="px-6 lg:px-8">
              <div className="mx-auto divide-y divide-gray-900/10">
                <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                  <Disclosure defaultOpen as="div" className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-2xl font-bold leading-7 font-display ml-4 lg:ml-7">
                              Board of Directors
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
                          <div className="text-center py-4">
                            <ul
                              role="list"
                              className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-20 sm:space-y-0 lg:max-w-5xl lg:grid-cols-4"
                            >
                              {board.map((member) => (
                                <li key={member.name}>
                                  <div className="space-y-6">
                                    <Image
                                      className="mx-auto h-32 w-32 rounded-full xl:h-32 xl:w-32"
                                      src={member.image}
                                      width="128"
                                      height="128"
                                      alt=""
                                    />
                                    <div className="space-y-2">
                                      <div className="space-y-1 text-lg font-medium leading-6">
                                        <h3>{member.name}</h3>
                                        <p className="text-blue-600">
                                          {member.role}
                                        </p>
                                      </div>
                                      {member.socials ? (
                                        <ul
                                          role="list"
                                          className="flex justify-center space-x-5"
                                        >
                                          <li>
                                            <a
                                              href={member.socials.linkedIn}
                                              className="text-gray-400 hover:text-gray-500"
                                            >
                                              <span className="sr-only">
                                                LinkedIn
                                              </span>
                                              <svg
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                              >
                                                <path
                                                  fillRule="evenodd"
                                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                  clipRule="evenodd"
                                                />
                                              </svg>
                                            </a>
                                          </li>
                                        </ul>
                                      ) : (
                                        ""
                                      )}
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Disclosure as="div" className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-2xl font-bold leading-7 font-display ml-4 lg:ml-7">
                              Charter
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
                          <Charter />
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Disclosure as="div" className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-2xl font-bold leading-7 font-display ml-4 lg:ml-7">
                              Bylaws
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
                          <Bylaws />
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Disclosure as="div" className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-2xl font-bold leading-7 font-display ml-4 lg:ml-7">
                              Meeting Minutes
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
                          <div className="px-10 mt-10">
                            <p className="mt-5 text-xl text-gray-500">
                              Meeting minutes, votes, and other records are
                              contained in the{" "}
                              <u>
                                <a href="https://github.com/resf/board">
                                  resf/board GitHub repository
                                </a>
                              </u>
                              .
                            </p>
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

export default About;
