import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main/Main";
import Home from "../pages/Home/Home";
import AddToy from "../pages/AddToy/AddToy";
import AllToy from "../pages/AllToy/AllToy";

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
      {
        path: "/alltoy",
        element: <AllToy></AllToy>,
        loader: () => fetch("http://localhost:5000/dolls"),
      },
    ],
  },
]);

export default router;
