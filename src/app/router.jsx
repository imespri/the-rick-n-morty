import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout/AppLayout";
import { Characters } from "@/features/Characters/Characters";
import { NotFound } from "@/components/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Characters /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
