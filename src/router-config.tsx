import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { Referrals } from "./pages/referrals";
import { ErrorBoundary } from "./pages/error-boundary";
import { Layout, LayoutWithSky } from "./components/layout";
import { ApplyCodeForm } from "./components/apply-code-form";
import { CreateCodeForm } from "./components/create-code-form";
import { ReferralStatistics } from "./components/referral-statistics";

export const ROUTES = {
  TEAMS: "/teams",
  REFERRALS: "/referrals",
  APPLY_CODE: "/referrals/apply-code",
  CREATE_CODE: "/referrals/create-code",
};

export const routes: RouteObject[] = [
  {
    index: true,
    errorElement: <ErrorBoundary />,
    element: <Navigate to={ROUTES.REFERRALS} />,
  },
  {
    path: ROUTES.REFERRALS,
    element: <LayoutWithSky />,
    errorElement: <ErrorBoundary />,
    children: [
      {
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
  {
    path: ROUTES.TEAMS,
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: (
          <div className="py-16 text-xs text-vega-clight-100 dark:text-vega-cdark-100">
            👷‍♂️🚧 TEAMS
          </div>
        ),
      },
    ],
  },
];

export const browserRouter = createBrowserRouter(routes);
