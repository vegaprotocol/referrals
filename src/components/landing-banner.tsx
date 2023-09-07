import classNames from "classnames";
import { AnimatedDudeWithWire } from "./graphics/dude";

const BANNER_BACKGROUND =
  "bg-[url(sky.png)] bg-[40%_0px] bg-[length:1440px] bg-no-repeat  invert dark:invert-0";

export const LandingBanner = () => (
  <div className={classNames("relative min-h-[680px] ", BANNER_BACKGROUND)}>
    <div className="max-w-[1440px] relative mx-auto px-16 md:px-32">
      <div
        aria-hidden
        className="absolute top-64 right-[220px] md:right-[340px] max-sm:hidden"
      >
        <AnimatedDudeWithWire />
      </div>
      <div className="pt-32 sm:w-[50%]">
        <h1 className="text-6xl font-alpha calt mb-10">
          Earn commission & stake rewards
        </h1>
        <p className="text-lg mb-10">
          Invite friends and earn commission in the form of Vega rewards from
          the trading fees they pay. Stake those rewards to earn multipliers on
          future rewards.
        </p>
        <p className="text-lg">
          Any friends that join using the code will receive discounts off
          trading fees.
        </p>
      </div>
    </div>
  </div>
);
