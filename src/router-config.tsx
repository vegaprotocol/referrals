import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Referrals } from "./pages/referrals";
import { ErrorBoundary } from "./pages/error-boundary";
import { LayoutWithSky } from "./components/layout";
import { ApplyCodeForm } from "./components/apply-code-form";
import { CreateCodeForm } from "./components/create-code-form";
import { ReferralStatistics } from "./components/referral-statistics";

export const ROUTES = {
  REFERRALS: "",
  APPLY_CODE: "apply-code",
  CREATE_CODE: "create-code",
};

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <LayoutWithSky />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: ROUTES.REFERRALS,
        element: <Referrals />,
        children: [
          {
            index: true,
            element: <ReferralStatistics />,
          },
          {
            path: ROUTES.CREATE_CODE,
            element: <CreateCodeForm />,
          },
          {
            path: ROUTES.APPLY_CODE,
            element: <ApplyCodeForm />,
          },
        ],
      },
    ],
  },
];

export const browserRouter = createBrowserRouter(routes);
