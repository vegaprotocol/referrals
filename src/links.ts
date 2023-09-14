import { Networks, VEGA_ENV } from "./env";

type Net = Exclude<Networks, "CUSTOM">;

type DAppLinks = {
  [k in Net]: string;
};

const EmptyLinks: DAppLinks = {
  [Networks.VALIDATOR_TESTNET]: "",
  [Networks.MAINNET_MIRROR]: "",
  [Networks.DEVNET]: "",
  [Networks.STAGNET1]: "",
  [Networks.TESTNET]: "",
  [Networks.MAINNET]: "",
};

export const ConsoleLinks: Record<Net, string> = {
  ...EmptyLinks,
  [Networks.STAGNET1]: "https://trading.stagnet1.vega.rocks",
  [Networks.TESTNET]: "https://console.fairground.wtf",
  [Networks.MAINNET]: "https://vega.trading",
  [Networks.MAINNET_MIRROR]: "https://console.mainnet-mirror.vega.rocks",
};

export enum ConsoleRoutes {
  HOME = "/",
  MARKET = "/markets/:marketId",
  MARKETS = "/markets/all",
  PORTFOLIO = "/portfolio",
  LIQUIDITY = "/liquidity/:marketId",
  DISCLAIMER = "/disclaimer",
}

export const consoleLink = (to: ConsoleRoutes | string) => {
  const currentMarketId = localStorage.getItem("marketId");
  if (to === ConsoleRoutes.MARKET) {
    if (!currentMarketId) to = ConsoleRoutes.MARKETS;
    else to = to.replace(":marketId", currentMarketId);
  }
  return `${ConsoleLinks[VEGA_ENV as Net]}${to}`;
};
