import { Tile } from "./tile";
import {
  CopyWithTooltip,
  Input,
  VegaIcon,
  VegaIconNames,
} from "@vegaprotocol/ui-toolkit";
import { Button } from "./buttons";
import { Tag } from "./tag";

export const ReferralStatistics = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-5">
      <div className="grid grid-cols-3 grid-rows-1 gap-5">
        <Tile>
          <h3 className="text-center text-4xl mb-1">3</h3>
          <p className="text-center text-sm text-vega-clight-100 dark:text-vega-cdark-100 mb-3">
            Your referral tier
          </p>
          <Tag className="mx-auto" color="purple">
            10,000 until Tier 2
          </Tag>
        </Tile>
        <Tile>
          <h3 className="text-center text-4xl mb-1">0.1%</h3>
          <p className="text-center text-sm text-vega-clight-100 dark:text-vega-cdark-100 mb-3">
            Your commission
          </p>
          <Tag className="mx-auto" color="purple">
            10,000 until 0.5%x
          </Tag>
        </Tile>
        <Tile variant="rainbow">
          <h3 className="calt text-lg mb-1">Your referral code</h3>
          <p className="text-sm text-vega-clight-100 dark:text-vega-cdark-100 mb-3">
            Share this code with friends
          </p>
          <div className="flex gap-2">
            <Input size={1} readOnly value="1234567890" />
            <CopyWithTooltip text="1234567890">
              <Button
                className="no-underline text-sm"
                icon={<VegaIcon name={VegaIconNames.COPY} />}
              >
                <span>Copy</span>
              </Button>
            </CopyWithTooltip>
          </div>
        </Tile>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 gap-5">
        <Tile className="py-3">
          <h3 className="text-center text-2xl mb-1">10,000</h3>
          <p className="text-center text-sm text-vega-clight-100 dark:text-vega-cdark-100">
            Your total trading volume
          </p>
        </Tile>
        <Tile className="py-3">
          <h3 className="text-center text-2xl mb-1">7</h3>
          <p className="text-center text-sm text-vega-clight-100 dark:text-vega-cdark-100">
            Total traders referred
          </p>
        </Tile>
        <Tile className="py-3">
          <h3 className="text-center text-2xl mb-1">0.1%</h3>
          <p className="text-center text-sm text-vega-clight-100 dark:text-vega-cdark-100">
            Maximum trader discount
          </p>
        </Tile>
        <Tile className="py-3">
          <h3 className="text-center text-2xl mb-1">10,000</h3>
          <p className="text-center text-sm text-vega-clight-100 dark:text-vega-cdark-100">
            Your commission (last 30d)
          </p>
        </Tile>
      </div>
    </div>
  );
};
