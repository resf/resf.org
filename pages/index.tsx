import type { NextPage } from "next";
import Head from "next/head";

const Index: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>RESF.org</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Something{" "}
          <a className="text-green-600 italic" href="https://nextjs.org">
            exciting
          </a>{" "}
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
