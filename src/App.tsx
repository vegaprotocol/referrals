import { HTMLAttributes } from "react";
import { LandingBanner } from "./components/landing-banner";
import classNames from "classnames";
import { Table } from "./components/table";
import { TiersTable } from "./components/tiers-table";
import { HowItWorksTable } from "./components/how-it-works-table";

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
      <LandingBanner />
      <Layout>
        <div className="mt-10 mb-5 flex flex-row justify-between items-baseline">
          <h2 className="text-2xl">Referral tiers</h2>
          <span className="text-base">
            <span className="text-vega-clight-200 dark:text-vega-cdark-200">
              Program ends:
            </span>{" "}
            16 epochs
          </span>
        </div>
        <div className="mb-20">
          <TiersTable />
        </div>

        <div className="flex flex-row justify-between items-baseline">
          <h2 className="text-2xl">Staking multipliers</h2>
        </div>
        <div className="bg-black dark:bg-white opacity-10 w-full h-40 my-3"></div>

        <div className="text-center mt-10 mb-5">
          <h2 className="text-2xl">How it works</h2>
        </div>
        <div className="w-[60%] mx-auto">
          <HowItWorksTable />
        </div>
      </Layout>
    </>
  );
};

export default App;
