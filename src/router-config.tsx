import { RouteObject, createBrowserRouter } from "react-router-dom";
import { ReferralsLandingPage } from "./pages/referrals-landing-page";
import { ErrorBoundary } from "./pages/error-boundary";
import { ApplyCodePage } from "./pages/apply-code-page";
import { CreateCodePage } from "./pages/create-code-page";

export const ROUTES = {
  REFERRALS_LANDING: "/",
  APPLY_CODE: "/apply-code",
  CREATE_CODE: "/create-code",
};

export const routes: RouteObject[] = [
  {
    path: ROUTES.REFERRALS_LANDING,
    index: true,
    element: <ReferralsLandingPage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: ROUTES.APPLY_CODE,
    element: <ApplyCodePage />,
  },
  {
    path: ROUTES.CREATE_CODE,
    element: <CreateCodePage />,
  },
];

export const browserRouter = createBrowserRouter(routes);
