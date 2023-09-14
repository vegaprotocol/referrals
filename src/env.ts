export enum Networks {
  VALIDATOR_TESTNET = "VALIDATOR_TESTNET",
  MAINNET_MIRROR = "MAINNET_MIRROR",
  CUSTOM = "CUSTOM",
  TESTNET = "TESTNET",
  STAGNET1 = "STAGNET1",
  DEVNET = "DEVNET",
  MAINNET = "MAINNET",
}

export const VEGA_ENV: string = import.meta.env.VITE_VEGA_ENV;

const parseNetworks = (value?: string) => {
  if (value) {
    try {
      return JSON.parse(value.replace('"', '"'));
    } catch (e) {
      return {};
    }
  }
  return {};
};
export const VEGA_NETWORKS = parseNetworks(import.meta.env.VITE_VEGA_NETWORKS);
export const VEGA_URL = import.meta.env.VITE_VEGA_URL;
export const VEGA_WALLET_URL = import.meta.env.VITE_VEGA_WALLET_URL;
export const VEGA_EXPLORER_URL = import.meta.env.VITE_VEGA_EXPLORER_URL;
export const CHROME_EXTENSION_URL = import.meta.env.VITE_CHROME_EXTENSION_URL;
export const MOZILLA_EXTENSION_URL = import.meta.env.VITE_MOZILLA_EXTENSION_URL;

export const GITHUB_FEEDBACK_URL = import.meta.env.VITE_GITHUB_FEEDBACK_URL;

export const VEGA_TOKEN_URL = import.meta.env.VITE_VEGA_TOKEN_URL;

export const VEGA_DOCS_URL: string =
  import.meta.env.VITE_VEGA_DOCS_URL || "https://docs.vega.xyz/mainnet";

export const DocsLinks = {
  NEW_TO_VEGA: `${VEGA_DOCS_URL}/concepts/new-to-vega`,
  AUCTION_TYPE_OPENING: `${VEGA_DOCS_URL}/concepts/trading-on-vega/trading-modes#auction-type-opening`,
  AUCTION_TYPE_LIQUIDITY_MONITORING: `${VEGA_DOCS_URL}/concepts/trading-on-vega/trading-modes#auction-type-liquidity-monitoring`,
  AUCTION_TYPE_PRICE_MONITORING: `${VEGA_DOCS_URL}/concepts/trading-on-vega/trading-modes#auction-type-price-monitoring`,
  AUCTION_TYPE_CLOSING: `${VEGA_DOCS_URL}/concepts/trading-on-vega/trading-modes#auction-type-closing`,
  STAKING_GUIDE: `${VEGA_DOCS_URL}/concepts/vega-chain/#staking-on-vega`,
  REWARDS_GUIDE: `${VEGA_DOCS_URL}/concepts/trading-on-vega/fees-rewards#trading-rewards`,
  VEGA_WALLET_CONCEPTS_URL: `${VEGA_DOCS_URL}/concepts/vega-wallet`,
  VEGA_WALLET_TOOLS_URL: `${VEGA_DOCS_URL}/tools/vega-wallet`,
  PROPOSALS_GUIDE: `${VEGA_DOCS_URL}/tutorials/proposals`,
  NODE_OPERATORS: `${VEGA_DOCS_URL}/node-operators`,
  LOSS_SOCIALIZATION: `${VEGA_DOCS_URL}/concepts/trading-on-vega/market-protections#loss-socialisation`,
  POSITION_RESOLUTION: `${VEGA_DOCS_URL}/concepts/trading-on-vega/market-protections#position-resolution`,
  LIQUIDITY: `${VEGA_DOCS_URL}/concepts/liquidity/provision`,
  WITHDRAWAL_LIMITS: `${VEGA_DOCS_URL}/concepts/assets/deposits-withdrawals#withdrawal-limits`,
  VALIDATOR_SCORES_REWARDS: `${VEGA_DOCS_URL}/concepts/vega-chain/validator-scores-and-rewards`,
};
