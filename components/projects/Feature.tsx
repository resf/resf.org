import { projects } from "@/config/projects";
import Image from "next/image";

export default function Feature() {
  return (
    <>
      <div className="relative overflow-hidden bg-white pt-16 pb-32">
        <h2 className="px-6 lg:px-8 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl font-display lg:max-w-7xl max-w-xl mb-10 mx-auto">
          Current Projects
        </h2>
        {projects.map((project, index) => (
          <div key={index} className={`${index === 0 ? "relative" : "mt-16 relative"}`}>
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                <div>
                  <div>
                    <Image
                      src={project.logo}
                      alt="Rocky Linux Logo"
                      height="0"
                      width="0"
                      className="flex-shrink-0 text-blue-600"
                      style={{ height: "2.5rem", width: "auto" }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 font-display">
                      {project.title}
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      {project.description}
                    </p>
                    <div className="mt-6">
                      <a
                        href={project.url}
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
                        &ldquo;{project.quote}&rdquo;
                      </p>
                    </div>
                    <footer className="mt-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <picture>
                            <img
                              className="h-6 w-6 rounded-full"
                              src={project.quoteAuthorImg}
                              alt={project.quoteAuthor}
                            />
                          </picture>
                        </div>
                        <div className="text-base font-medium text-gray-700">
                          {project.quoteAuthor}
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
                      className="w-full lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src={project.image}
                      alt="Rocky Linux Workstation user interface"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
