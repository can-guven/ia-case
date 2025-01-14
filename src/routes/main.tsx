import { lazy, Suspense } from "react";
import LoadingScreen from "../components/LoadingScreen";
import { Outlet } from "react-router-dom";

const MovieListPage = lazy(() => import("../pages/movie/list"));
const MovieDetailPage = lazy(() => import("../pages/movie/detail"));

export const mainRoutes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      { element: <MovieListPage />, index: true },
      { path: ":IMDbId", element: <MovieDetailPage /> },
    ],
  },
];
