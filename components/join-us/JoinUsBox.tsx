import classNames from "@/utils/classNames";
import type { ReactNode } from "react";

export interface JoinUsBoxProps {
  children: ReactNode;
  className?: string;
  title: string;
  icon: string;
  innerPadding?: boolean;
  larger?: boolean;
  spanRow?: boolean;
}

const JoinUsBox = ({
  children,
  className,
  title,
  icon,
  innerPadding = false,
  larger = false,
  spanRow = false,
}: JoinUsBoxProps) => {
  return (
    <div
      className={classNames(
        className ? className : "",
        `px-2 py-5 text-center bg-white`,
        spanRow ? "md:col-span-2" : "md:col-span-1"
      )}
    >
      <div
        className={classNames(
          "bg-white bg-center bg-no-repeat min-w-full min-h-full",
          innerPadding ? "py-5" : "py-2"
        )}
        style={{ backgroundImage: `url(${icon})`, backgroundSize: 100 }}
      >
        <h3
          className={classNames(
            larger ? "text-2xl" : "text-xl",
            "font-bold tracking-tight text-gray-900 font-display"
          )}
        >
          {title}
        </h3>
        <p
          className={classNames(
            larger ? "text-lg" : "text-base",
            "mt-2 font-medium"
          )}
        >
          {children}
        </p>
      </div>
    </div>
  );
};

export default JoinUsBox;
