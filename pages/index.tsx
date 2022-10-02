import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Logo from "../public/icon-text.svg";

const Index: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>RESF.org</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="mb-6">
          <Image src={Logo} alt="RESF Logo" className="h-24" />
        </div>
        <h1 className="text-6xl font-bold font-display">
          Something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 italic">
            exciting
          </span>{" "}
          is on the way!
        </h1>
        <p className="mt-6 text-2xl text-gray-700">
          We are working on bringing you a great website!
        </p>
        <p className="mt-3 text-2xl text-gray-700">
          Try visiting the{" "}
          <a
            href="https://www.rockylinux.org/"
            className="text-blue-700 text-opacity-80 underline"
          >
            Rocky Linux
          </a>{" "}
          project for now.
        </p>
      </main>
    </div>
  );
};

export default Index;
