import { createBrowserRouter } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Detail } from "./Pages/Detail";
import { NotFound } from "./Pages/NotFound";
import { Layout } from "./Components/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:cripto",
        element: <Detail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export { router };
