const SponsorsList = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-12 mx-auto grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
        {children}
      </div>
    </div>
  );
};

export default SponsorsList;
