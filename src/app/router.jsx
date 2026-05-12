import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
