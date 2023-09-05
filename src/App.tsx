import { HTMLAttributes } from "react";
import { LandingBanner } from "./components/landing-banner";
import classNames from "classnames";

const Gradient = () => (
  <div
    className={classNames(
      "absolute h-[680px] top-0 left-0 w-full ",
      "bg-gradient-to-b from-vega-cdark-900 dark:from-white to-transparent",
      "opacity-10"
    )}
  ></div>
);

const Layout = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={classNames(
        "max-w-[1440px] h-full overflow-hidden",
        "mx-auto px-32 pb-32",
        "h-full relative z-0"
      )}
    >
      {children}
    </div>
  );
};

const App = () => {
  return (
    <>
      <Gradient />
      <LandingBanner />
      <Layout>
        <div className="flex flex-row justify-between items-baseline">
          <h2 className="text-2xl">Referral tiers</h2>
          <span className="text-base">
            <span className="text-vega-clight-200 dark:text-vega-cdark-200">
              Program ends:
            </span>{" "}
            16 epochs
          </span>
        </div>
        <div className="bg-black dark:bg-white opacity-10 w-full h-40 my-3"></div>

        <div className="flex flex-row justify-between items-baseline">
          <h2 className="text-2xl">Staking multipliers</h2>
        </div>
        <div className="bg-black dark:bg-white opacity-10 w-full h-40 my-3"></div>

        <div className="flex flex-row justify-between items-baseline">
          <h2 className="text-2xl">How it works</h2>
        </div>
        <div className="bg-black dark:bg-white opacity-10 w-full h-40 my-3"></div>
      </Layout>
    </>
  );
};

export default App;
