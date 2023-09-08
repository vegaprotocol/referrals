import { Intent, TradingButton } from "@vegaprotocol/ui-toolkit";
import { Layout } from "../components/layout";
import { Tile } from "../components/tile";

export const CreateCodePage = () => {
  return (
    <Layout className="pt-32 w-2/3 md:w-1/2">
      <Tile variant="rainbow">
        <h3 className="text-xl mb-3">Create referral code</h3>
        <p className="text-vega-clight-100 dark:text-vega-cdark-100 mb-3">
          Generate a referral code to share with your friends and start earning
          commission.
        </p>
        <TradingButton
          onClick={() => {
            console.log("CREATE CODE", Math.random());
          }}
          className="w-full"
          intent={Intent.Primary}
        >
          Generate code
        </TradingButton>
      </Tile>
    </Layout>
  );
};
