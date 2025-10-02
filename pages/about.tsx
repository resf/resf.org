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
                              className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-8 sm:space-y-0 lg:max-w-5xl lg:grid-cols-4"
                            >
                              {board.filter((member) => member.active).map((member) => (
                                <li key={member.name}>
                                  <div className="space-y-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
                                    <Image
                                      className="mx-auto h-32 w-32 rounded-full xl:h-32 xl:w-32 border-4 border-gray-300"
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
                                          {member.socials.linkedIn && (
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
                                          )}
                                          {member.socials.bluesky && (
                                            <li>
                                              <a
                                                href={member.socials.bluesky}
                                                className="text-gray-400 hover:text-gray-500"
                                              >
                                                <span className="sr-only">
                                                  Bluesky
                                                </span>
                                                <svg
                                                  className="h-5 w-5"
                                                  aria-hidden="true"
                                                  fill="currentColor"
                                                  viewBox="0 0 600 530"
                                                >
                                                  <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" />
                                                </svg>
                                              </a>
                                            </li>
                                          )}
                                          {member.socials.mastodon && (
                                            <li>
                                              <a
                                                href={member.socials.mastodon}
                                                className="text-gray-400 hover:text-gray-500"
                                                rel="me"
                                              >
                                                <span className="sr-only">
                                                  Mastodon
                                                </span>
                                                <svg
                                                  className="h-5 w-5"
                                                  aria-hidden="true"
                                                  fill="currentColor"
                                                  viewBox="0 0 24 24"
                                                >
                                                  <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z" />
                                                </svg>
                                              </a>
                                            </li>
                                          )}
                                          {member.socials.website && (
                                            <li>
                                              <a
                                                href={member.socials.website}
                                                className="text-gray-400 hover:text-gray-500"
                                              >
                                                <span className="sr-only">
                                                  Website
                                                </span>
                                                <svg
                                                  className="h-5 w-5"
                                                  aria-hidden="true"
                                                  fill="currentColor"
                                                  viewBox="0 0 20 20"
                                                >
                                                  <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                                                    clipRule="evenodd"
                                                  />
                                                </svg>
                                              </a>
                                            </li>
                                          )}
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
                              Previous Directors
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
                              className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-8 sm:space-y-0 lg:max-w-5xl lg:grid-cols-4"
                            >
                              {board.filter((member) => !member.active).map((member) => (
                                <li key={member.name}>
                                  <div className="space-y-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
                                    <Image
                                      className="mx-auto h-32 w-32 rounded-full xl:h-32 xl:w-32 border-4 border-gray-300"
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
                                          {member.socials.linkedIn && (
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
                                          )}
                                          {member.socials.bluesky && (
                                            <li>
                                              <a
                                                href={member.socials.bluesky}
                                                className="text-gray-400 hover:text-gray-500"
                                              >
                                                <span className="sr-only">
                                                  Bluesky
                                                </span>
                                                <svg
                                                  className="h-5 w-5"
                                                  aria-hidden="true"
                                                  fill="currentColor"
                                                  viewBox="0 0 600 530"
                                                >
                                                  <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" />
                                                </svg>
                                              </a>
                                            </li>
                                          )}
                                          {member.socials.mastodon && (
                                            <li>
                                              <a
                                                href={member.socials.mastodon}
                                                className="text-gray-400 hover:text-gray-500"
                                                rel="me"
                                              >
                                                <span className="sr-only">
                                                  Mastodon
                                                </span>
                                                <svg
                                                  className="h-5 w-5"
                                                  aria-hidden="true"
                                                  fill="currentColor"
                                                  viewBox="0 0 24 24"
                                                >
                                                  <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z" />
                                                </svg>
                                              </a>
                                            </li>
                                          )}
                                          {member.socials.website && (
                                            <li>
                                              <a
                                                href={member.socials.website}
                                                className="text-gray-400 hover:text-gray-500"
                                              >
                                                <span className="sr-only">
                                                  Website
                                                </span>
                                                <svg
                                                  className="h-5 w-5"
                                                  aria-hidden="true"
                                                  fill="currentColor"
                                                  viewBox="0 0 20 20"
                                                >
                                                  <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                                                    clipRule="evenodd"
                                                  />
                                                </svg>
                                              </a>
                                            </li>
                                          )}
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

                  <Disclosure as="div" id="charter" className="pt-6">
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

                  <Disclosure as="div" id="bylaws" className="pt-6">
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
