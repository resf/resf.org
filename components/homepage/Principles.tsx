const principles = [
  {
    id: 1,
    title: "Community Responsibility",
    description:
      "Here for the benefit of the commuity. We will never be driven, motivated, or manipulated by profit or monetary gain.",
  },
  {
    id: 2,
    title: "Free, Open-Source, and Reproducible",
    description:
      "Everything we do is intended to be freely available and open-source and will leverage only OSI approved permissive, non-copyleft open-source software licenses for our Projects.",
  },
  {
    id: 3,
    title: "Projects",
    description:
      'We will build, host, and "adopt" open-source Projects which are of value to the enterprise community and/or other Foundation projects.',
  },
  {
    id: 4,
    title: "Transparency",
    description:
      "We will remain transparent to the community as defined by our bylaws and bound by our data security policy.",
  },
];

export default function Principles() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl font-display uppercase">
          Principles
        </h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {principles.map((principle) => (
            <div
              key={principle.id}
              className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
            >
              <dt className="text-lg font-bold font-display leading-7 text-gray-900 lg:col-span-5">
                {principle.title}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-600">
                  {principle.description}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
