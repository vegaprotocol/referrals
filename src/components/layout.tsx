import classNames from "classnames";
import { HTMLAttributes } from "react";

export const Layout = ({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={classNames(
        "max-w-[1440px]",
        "mx-auto px-16 md:px-32 pb-32",
        "relative z-0",
        className
      )}
    >
      {children}
    </div>
  );
};
