const SponsorsHeading = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white">
        <div className="py-16 px-6 sm:py-24 lg:flex lg:justify-between lg:px-8">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl font-display">
              Sponsors
            </h2>
            <p className="mt-7 text-lg">
              We would like to thank our sponsors for their support thus far on
              the Projects.
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
  );
};

export default SponsorsHeading;
