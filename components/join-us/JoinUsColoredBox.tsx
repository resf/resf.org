const JoinUsColoredBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="-z-40 mt-5 p-6 bg-gradient-to-br from-rockyGreen to-rockyBlue grid grid-cols-2 gap-6 max-w-[908px]">
      {children}
    </div>
  );
};

export default JoinUsColoredBox;
