import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/Main";
import Home from "../pages/Home/Home";
import AddToy from "../pages/AddToy/AddToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add",
        element: <AddToy></AddToy>,
      },
    ],
  },
]);

export default router;
