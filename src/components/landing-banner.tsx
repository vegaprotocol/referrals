import { AnimatedDudeWithWire } from "./graphics/dude";

export const LandingBanner = () => (
  <div className="relative min-h-[680px]">
    {/** background image */}
    <div className="absolute w-full h-[680px] bg-[url(assets/sky.png)] bg-[40%_0px] bg-[length:1440px] bg-no-repeat  invert dark:invert-0"></div>
    <div className="max-w-[1440px] relative mx-auto px-32">
      <div className="absolute top-64 right-[170px] md:right-[340px] max-sm:hidden">
        <AnimatedDudeWithWire />
      </div>
      <div className="pt-32 w-[50%]">
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
