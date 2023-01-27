import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  EnvelopeIcon,
} from "@heroicons/react/20/solid";
import Charter from "@/components/charter-bylaws/Charter";
import Bylaws from "@/components/charter-bylaws/Bylaws";

import Header from "../components/Header";
import Layout from "../components/Layout";
import Footer from "@/components/footer/Footer";

import {
  projectDropdownItems,
  //   menuItems,
  aboutDropdownItems,
  actionItems,
} from "@/config/menu";

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

const Index: NextPage = ({ menuItems }: IndexProps) => {
  const { t: tCommon } = useTranslation("common");
  const { t } = useTranslation("coming-soon");

  return (
    <>
      <Head>
        <title>About | {tCommon("orgName")}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        {menuItems && <Header menu={menuItems} />}
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:flex lg:justify-between lg:px-8">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl font-display">
                About RESF
              </h2>
              <p className="mt-5 text-xl text-gray-500">
                What we&apos;ve created with the RESF is an organizational body
                designed to help open-source projects thrive with a structure
                that ensures a balanced and fair distribution of community
                control while specifically enabling enterprise use-cases,
                vendors, and commercial entities. Our charter and bylaws set
                forth an inclusive management framework, commitment, and
                accountability to ensure the longevity and success of our hosted
                open-source projects and their respective communities.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white pb-16 sm:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto divide-y divide-gray-900/10">
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                <Disclosure as="div" className="pt-6">
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
                        <div className="mx-auto max-w-7xl text-center py-4">
                          <ul
                            role="list"
                            className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-20 sm:space-y-0 lg:max-w-5xl lg:grid-cols-4"
                          >
                            <li>
                              <div className="space-y-6">
                                <picture>
                                  <img
                                    className="mx-auto h-32 w-32 rounded-full xl:h-32 xl:w-32"
                                    src="/avatar.png"
                                    alt=""
                                  />
                                </picture>
                                <div className="space-y-2">
                                  <div className="space-y-1 text-lg font-medium leading-6">
                                    <h3>First Name Last Name</h3>
                                    <p className="text-blue-600">Person Role</p>
                                  </div>
                                  <ul
                                    role="list"
                                    className="flex justify-center space-x-5"
                                  >
                                    <li>
                                      <a
                                        href="Person Social"
                                        className="text-gray-400 hover:text-gray-500"
                                      >
                                        <span className="sr-only">Twitter</span>
                                        <svg
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="Person Social"
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
                                </div>
                              </div>
                            </li>

                            <li>
                              <div className="space-y-6">
                                <picture>
                                  <img
                                    className="mx-auto h-32 w-32 rounded-full xl:h-32 xl:w-32"
                                    src="/avatar.png"
                                    alt=""
                                  />
                                </picture>
                                <div className="space-y-2">
                                  <div className="space-y-1 text-lg font-medium leading-6">
                                    <h3>First Name Last Name</h3>
                                    <p className="text-blue-600">Person Role</p>
                                  </div>
                                  <ul
                                    role="list"
                                    className="flex justify-center space-x-5"
                                  >
                                    <li>
                                      <a
                                        href="Person Social"
                                        className="text-gray-400 hover:text-gray-500"
                                      >
                                        <span className="sr-only">Twitter</span>
                                        <svg
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="Person Social"
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
                                </div>
                              </div>
                            </li>

                            <li>
                              <div className="space-y-6">
                                <picture>
                                  <img
                                    className="mx-auto h-32 w-32 rounded-full xl:h-32 xl:w-32"
                                    src="/avatar.png"
                                    alt=""
                                  />
                                </picture>
                                <div className="space-y-2">
                                  <div className="space-y-1 text-lg font-medium leading-6">
                                    <h3>First Name Last Name</h3>
                                    <p className="text-blue-600">Person Role</p>
                                  </div>
                                  <ul
                                    role="list"
                                    className="flex justify-center space-x-5"
                                  >
                                    <li>
                                      <a
                                        href="Person Social"
                                        className="text-gray-400 hover:text-gray-500"
                                      >
                                        <span className="sr-only">Twitter</span>
                                        <svg
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="Person Social"
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
                                </div>
                              </div>
                            </li>

                            <li>
                              <div className="space-y-6">
                                <picture>
                                  <img
                                    className="mx-auto h-32 w-32 rounded-full xl:h-32 xl:w-32"
                                    src="/avatar.png"
                                    alt=""
                                  />
                                </picture>
                                <div className="space-y-2">
                                  <div className="space-y-1 text-lg font-medium leading-6">
                                    <h3>First Name Last Name</h3>
                                    <p className="text-blue-600">Person Role</p>
                                  </div>
                                  <ul
                                    role="list"
                                    className="flex justify-center space-x-5"
                                  >
                                    <li>
                                      <a
                                        href="Person Social"
                                        className="text-gray-400 hover:text-gray-500"
                                      >
                                        <span className="sr-only">Twitter</span>
                                        <svg
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="Person Social"
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
                                </div>
                              </div>
                            </li>

                            <li>
                              <div className="space-y-6">
                                <picture>
                                  <img
                                    className="mx-auto h-32 w-32 rounded-full xl:h-32 xl:w-32"
                                    src="/avatar.png"
                                    alt=""
                                  />
                                </picture>
                                <div className="space-y-2">
                                  <div className="space-y-1 text-lg font-medium leading-6">
                                    <h3>First Name Last Name</h3>
                                    <p className="text-blue-600">Person Role</p>
                                  </div>
                                  <ul
                                    role="list"
                                    className="flex justify-center space-x-5"
                                  >
                                    <li>
                                      <a
                                        href="Person Social"
                                        className="text-gray-400 hover:text-gray-500"
                                      >
                                        <span className="sr-only">Twitter</span>
                                        <svg
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="Person Social"
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
                                </div>
                              </div>
                            </li>

                            <li>
                              <div className="space-y-6">
                                <picture>
                                  <img
                                    className="mx-auto h-32 w-32 rounded-full xl:h-32 xl:w-32"
                                    src="/avatar.png"
                                    alt=""
                                  />
                                </picture>
                                <div className="space-y-2">
                                  <div className="space-y-1 text-lg font-medium leading-6">
                                    <h3>First Name Last Name</h3>
                                    <p className="text-blue-600">Person Role</p>
                                  </div>
                                  <ul
                                    role="list"
                                    className="flex justify-center space-x-5"
                                  >
                                    <li>
                                      <a
                                        href="Person Social"
                                        className="text-gray-400 hover:text-gray-500"
                                      >
                                        <span className="sr-only">Twitter</span>
                                        <svg
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="Person Social"
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
                                </div>
                              </div>
                            </li>

                            <li>
                              <div className="space-y-6">
                                <picture>
                                  <img
                                    className="mx-auto h-32 w-32 rounded-full xl:h-32 xl:w-32"
                                    src="/avatar.png"
                                    alt=""
                                  />
                                </picture>
                                <div className="space-y-2">
                                  <div className="space-y-1 text-lg font-medium leading-6">
                                    <h3>First Name Last Name</h3>
                                    <p className="text-blue-600">Person Role</p>
                                  </div>
                                  <ul
                                    role="list"
                                    className="flex justify-center space-x-5"
                                  >
                                    <li>
                                      <a
                                        href="Person Social"
                                        className="text-gray-400 hover:text-gray-500"
                                      >
                                        <span className="sr-only">Twitter</span>
                                        <svg
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="Person Social"
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
                                </div>
                              </div>
                            </li>

                            <li>
                              <div className="space-y-6">
                                <picture>
                                  <img
                                    className="mx-auto h-32 w-32 rounded-full xl:h-32 xl:w-32"
                                    src="/avatar.png"
                                    alt=""
                                  />
                                </picture>
                                <div className="space-y-2">
                                  <div className="space-y-1 text-lg font-medium leading-6">
                                    <h3>First Name Last Name</h3>
                                    <p className="text-blue-600">Person Role</p>
                                  </div>
                                  <ul
                                    role="list"
                                    className="flex justify-center space-x-5"
                                  >
                                    <li>
                                      <a
                                        href="Person Social"
                                        className="text-gray-400 hover:text-gray-500"
                                      >
                                        <span className="sr-only">Twitter</span>
                                        <svg
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                        >
                                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="Person Social"
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
                                </div>
                              </div>
                            </li>
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
                        <div className="max-w-6xl mx-auto px-10 mt-10">
                          <div className="overflow-hidden bg-gray-50 shadow sm:rounded-md">
                            <ul
                              role="list"
                              className="divide-y divide-gray-200"
                            >
                              <li>
                                <a
                                  href="minuteslink"
                                  className="block hover:bg-gray-50"
                                >
                                  <div className="flex items-center px-4 py-4 sm:px-6">
                                    <div className="flex min-w-0 flex-1 items-center">
                                      <div className="min-w-0 flex-1 px-2 md:grid md:grid-cols-2 md:gap-4">
                                        <div>
                                          <p className="truncate text-sm font-medium text-blue-600">
                                            January 16, 2023
                                          </p>
                                          <p className="mt-2 flex items-center text-sm text-gray-500">
                                            <span>
                                              The initial meeting commenced,
                                              introductions were made between
                                              directors, and the board put forth
                                              their first vote regarding project
                                              structure.
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                      <p className="text-blue-500 font-semibold">
                                        Download{" "}
                                      </p>
                                      <ChevronRightIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                      />
                                    </div>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </dl>
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
      //   menuItems: menuItems,
      aboutItems: aboutDropdownItems,
      actionItems: actionItems,
    },
  },
});

export default Index;
