import { RouterProvider } from "react-router-dom";
import { browserRouter } from "./router-config";
// import { VegaWalletProvider } from "@vegaprotocol/wallet";
// import { WALLET_DOCS_URL } from "./constants";

const App = () => {
  return (
    // <VegaWalletProvider
    //   config={{
    //     network: import.meta.env.VEGA_ENV,
    //     vegaUrl: import.meta.env.VEGA_URL,
    //     vegaWalletServiceUrl: import.meta.env.VEGA_WALLET_URL,
    //     links: {
    //       explorer: import.meta.env.VEGA_EXPLORER_URL,
    //       concepts: WALLET_DOCS_URL,
    //       chromeExtensionUrl: import.meta.env.CHROME_EXTENSION_URL,
    //       mozillaExtensionUrl: import.meta.env.MOZILLA_EXTENSION_URL,
    //     },
    //   }}
    // >
    //   <RouterProvider router={browserRouter} />
    // </VegaWalletProvider>
    <RouterProvider router={browserRouter} />
  );
};

export default App;
