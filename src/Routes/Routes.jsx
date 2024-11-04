import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Statistics from "../Pages/Statistics";
import Home from "../Pages/Home";
import Cards from "../components/Cards";
import ProductDetials from "../Pages/ProductDetials";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            loader: () => fetch("../products.json"),
            element: <Cards></Cards>,
          },
          {
            path: "/category/:category",
            loader: () => fetch("../products.json"),
            element: <Cards></Cards>,
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/product/:id",
        element: <ProductDetials></ProductDetials>,
        loader: () => fetch("../products.json"),
      },
    ],
  },
]);
export default router;
