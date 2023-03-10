const JoinUsColoredBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-5 p-6 bg-gradient-to-br from-rockyGreen to-rockyBlue flex flex-col md:grid md:grid-cols-2 gap-6 md:max-w-[908px]">
      {children}
    </div>
  );
};

export default JoinUsColoredBox;
