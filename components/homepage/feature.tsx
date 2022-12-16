import { InboxIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function Feature() {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32">
      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div>
                <picture>
                  <img
                    src="/rl-logo-text.svg"
                    alt="Rocky Linux"
                    className="h-10 flex-shrink-0 text-blue-600"
                    aria-hidden="true"
                  />
                </picture>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 font-display">
                  Enterprise Linux, the community way.
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Rocky Linux is an open-source enterprise operating system
                  designed to be 100% bug-for-bug compatible with Red Hat
                  Enterprise Linux®. It is under intensive development by the
                  community.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex bg-green-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-green-500 hover:bg-green-600 hover:ring-green-600"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Thinking back to early CentOS days... My cofounder
                    was Rocky McGaugh. He is no longer with us, so as a H/T to
                    him, who never got to see the success that CentOS came to
                    be, I introduce to you...Rocky Linux.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <picture>
                        <img
                          className="h-6 w-6 rounded-full"
                          src="/gmk.png"
                          alt="Gregory Kurtzer"
                        />
                      </picture>
                    </div>
                    <div className="text-base font-medium text-gray-700">
                      Gregory Kurtzer, Founder
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <picture>
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/rl9-ss.png"
                  alt="Rocky Linux Workstation user interface"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div>
                <picture>
                  <img
                    src="/pd-logo-text.svg"
                    alt="Peridot Build System"
                    className="h-10 flex-shrink-0 text-blue-600"
                    aria-hidden="true"
                  />
                </picture>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 font-display">
                  Cloud-native build system for Linux.
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Named after the Gemstone, Peridot is a cloud-native build and
                  release tool used for building, releasing and maintaining
                  Linux distributions and forks.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex bg-green-700 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-green-700 hover:bg-green-800 hover:ring-green-800"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <picture>
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/pd-ss.png"
                  alt="Peridot user interface"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
