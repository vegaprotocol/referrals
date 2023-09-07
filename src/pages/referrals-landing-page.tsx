import {
  TradingAnchorButton,
  VegaIcon,
  VegaIconNames,
} from "@vegaprotocol/ui-toolkit";
import classNames from "classnames";
import { HowItWorksTable } from "../components/how-it-works-table";
import { LandingBanner } from "../components/landing-banner";
import { Layout } from "../components/layout";
import { TiersTable } from "../components/tiers-table";
import { BORDER_COLOR, GRADIENT } from "../constants";

export const ReferralsLandingPage = () => (
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

      <div className="mb-5 flex flex-row justify-between items-baseline">
        <h2 className="text-2xl">Staking multipliers</h2>
      </div>
      <div className="mb-20 flex flex-col md:flex-row gap-5">
        <div
          className={classNames(
            "overflow-hidden",
            "border rounded-md w-full h-max",
            BORDER_COLOR
          )}
        >
          <div aria-hidden>
            <img src="1x.png" alt="1x multiplier" />
          </div>
          <div className={classNames("p-3", GRADIENT)}>
            <h3 className="mb-3 text-xl">Tradestarter</h3>
            <p className="text-base text-vega-clight-100 dark:text-vega-cdark-100">
              Stake a minimum of 100 $VEGA tokens
            </p>
            <div className="mt-3 w-max border rounded-[1rem] border-vega-green-500 py-[0.125rem] px-2 text-xs text-vega-green-500">
              Reward multiplier 1x
            </div>
          </div>
        </div>

        <div
          className={classNames(
            "overflow-hidden",
            "border rounded-md w-full h-max",
            BORDER_COLOR
          )}
        >
          <div aria-hidden>
            <img src="2x.png" alt="2x multiplier" />
          </div>
          <div className={classNames("p-3", GRADIENT)}>
            <h3 className="mb-3 text-xl">Mid level degen</h3>
            <p className="text-base text-vega-clight-100 dark:text-vega-cdark-100">
              Stake a minimum of 1000 $VEGA tokens
            </p>
            <div className="mt-3 w-max border rounded-[1rem] border-vega-blue-500 py-[0.125rem] px-2 text-xs text-vega-blue-500">
              Reward multiplier 2x
            </div>
          </div>
        </div>
        <div
          className={classNames(
            "overflow-hidden",
            "border rounded-md w-full h-max",
            BORDER_COLOR
          )}
        >
          <div aria-hidden>
            <img src="3x.png" alt="3x multiplier" />
          </div>
          <div className={classNames("p-3", GRADIENT)}>
            <h3 className="mb-3 text-xl">Reward hoarder</h3>
            <p className="text-base text-vega-clight-100 dark:text-vega-cdark-100">
              Stake a minimum of 10,000 $VEGA tokens
            </p>
            <div className="mt-3 w-max border rounded-[1rem] border-vega-pink-500 py-[0.125rem] px-2 text-xs text-vega-pink-500">
              Reward multiplier 3x
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 mb-5">
        <h2 className="text-2xl">How it works</h2>
      </div>
      <div className="md:w-[60%] mx-auto">
        <HowItWorksTable />
        <div className="mt-5">
          <TradingAnchorButton
            className="w-max mx-auto"
            href="https://docs.vega.xyz/"
          >
            Read the terms <VegaIcon name={VegaIconNames.OPEN_EXTERNAL} />
          </TradingAnchorButton>
        </div>
      </div>
    </Layout>
  </>
);
