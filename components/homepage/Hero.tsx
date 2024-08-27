import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function Hero() {
  const { t: tHome } = useTranslation("home");

  return (
    <div className="bg-white mt-7">
      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <picture>
                    <img
                      className="h-full w-full object-cover"
                      src="https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
                      alt="Office Building"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-500 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl font-display uppercase text-white">
                    {tHome("hero.title.string1")}{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-blue-100">
                      {tHome("hero.title.string2")}{" "}
                    </span>
                    {tHome("hero.title.string3")}
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-gray-100 sm:max-w-3xl">
                    {tHome("hero.description.string1")}
                  </p>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-gray-100 sm:max-w-3xl">
                    {tHome("hero.description.string2")}
                  </p>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <div className="space-y-4 sm:mx-auto sm:space-y-0">
                      <Link
                        href="/join-us"
                        className="flex items-center justify-center border border-transparent bg-white px-4 py-3 text-base font-medium text-green-700 shadow-sm hover:bg-blue-50 sm:px-8"
                      >
                        {tHome("hero.cta")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo cloud */}
          <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-base font-semibold text-gray-500 font-display uppercase">
                {tHome("hero.logoCloudTitle")}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-7 md:justify-center">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a href="https://ciq.com/products/rocky-linux/">
                    <picture>
                      <img
                        className="h-12"
                        src="/images/sponsors/ciq.png"
                        alt="CIQ"
                      />
                    </picture>
                  </a>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a href="https://45drives.com/">
                    <picture>
                      <img
                        className="h-12"
                        src="/images/sponsors/45drives.png"
                        alt="45Drives"
                      />
                    </picture>
                  </a>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a href="https://aws.com/">
                    <picture>
                      <img
                        className="h-12"
                        src="/images/sponsors/aws.png"
                        alt="AWS"
                      />
                    </picture>
                  </a>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a href="https://cloud.google.com/">
                    <picture>
                      <img
                        className="h-12"
                        src="/images/sponsors/gcp.png"
                        alt="Google Cloud"
                      />
                    </picture>
                  </a>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a href="https://opendrives.com/">
                    <picture>
                      <img
                        className="h-12"
                        src="/images/sponsors/opendrives.png"
                        alt="OpenDrives"
                      />
                    </picture>
                  </a>
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a href="https://symphony.rakuten.com/">
                    <picture>
                      <img
                        className="h-12"
                        src="/images/sponsors/rakutan-symphony.png"
                        alt="Rakutan Symphony"
                      />
                    </picture>
                  </a>
                </div>
                <div className="md:col-span-1 md:block hidden lg:hidden"></div>
                <div className="md:col-span-1 md:block hidden lg:hidden"></div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <a href="https://vmware.com/">
                    <picture>
                      <img
                        className="h-12"
                        src="/images/sponsors/vmware.png"
                        alt="vmware"
                      />
                    </picture>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
