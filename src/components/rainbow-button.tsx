import classNames from "classnames";
import { HTMLAttributes } from "react";

type RainbowButtonProps = {
  variant?: "full" | "border";
};

export const RainbowButton = ({
  variant = "full",
  children,
  className,
  ...props
}: RainbowButtonProps & HTMLAttributes<HTMLButtonElement>) => (
  <button
    className={classNames(
      "bg-rainbow hover:bg-none hover:bg-vega-pink-500 rounded-lg overflow-hidden",
      {
        "px-5 py-3 text-white": variant === "full",
        "p-[0.125rem]": variant === "border",
      },
      className
    )}
    {...props}
  >
    <div
      className={classNames({
        "bg-white dark:bg-vega-cdark-900 text-black dark:text-white px-5 py-3 rounded-[0.35rem] overflow-hidden":
          variant === "border",
      })}
    >
      {children}
    </div>
  </button>
);
