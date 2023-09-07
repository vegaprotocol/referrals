import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ReferralsLandingPage } from "./pages/referrals-landing-page";
import { ErrorBoundary } from "./pages/error-boundary";

export const routes: RouteObject[] = [
  {
    path: "/",
    index: true,
    element: <ReferralsLandingPage />,
    errorElement: <ErrorBoundary />,
  },
];

export const browserRouter = createBrowserRouter(routes);
