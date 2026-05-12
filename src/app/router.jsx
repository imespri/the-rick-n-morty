import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/features/layouts/layout";
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // вместо Layout
    children: [
      { index: true, element: <HomePage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
