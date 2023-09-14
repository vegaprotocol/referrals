import { RouterProvider } from "react-router-dom";
import { browserRouter } from "./router-config";
import { VegaWalletProvider } from "@vegaprotocol/wallet";
import {
  CHROME_EXTENSION_URL,
  DocsLinks,
  MOZILLA_EXTENSION_URL,
  Networks,
  VEGA_ENV,
  VEGA_EXPLORER_URL,
  VEGA_URL,
  VEGA_WALLET_URL,
} from "./env";

const App = () => {
  return (
    <VegaWalletProvider
      config={{
        network: VEGA_ENV as Networks,
        vegaUrl: VEGA_URL,
        vegaWalletServiceUrl: VEGA_WALLET_URL,
        links: {
          explorer: VEGA_EXPLORER_URL,
          concepts: DocsLinks.VEGA_WALLET_CONCEPTS_URL,
          chromeExtensionUrl: CHROME_EXTENSION_URL,
          mozillaExtensionUrl: MOZILLA_EXTENSION_URL,
        },
      }}
    >
      <RouterProvider router={browserRouter} />
    </VegaWalletProvider>
  );
};

export default App;
