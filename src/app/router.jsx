import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "@/components/AppLayout/AppLayout";
import { Characters } from "@/features/Characters/Characters";
import { Feedback } from "@/features/Feedback/Feedback";
import { Locations } from "@/features/Locations/Locations";
import { Episodes } from "@/features/Episodes/Episodes";
import { NotFound } from "@/components/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Characters /> },
      { path: "locations", element: <Locations /> },
      { path: "episodes", element: <Episodes /> },
      { path: "feedback", element: <Feedback /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
