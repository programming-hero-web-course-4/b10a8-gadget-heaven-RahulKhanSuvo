import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Statistics from "../Pages/Statistics";
import Home from "../Pages/Home";
import Cards from "../components/Cards";
import ProductDetials from "../Pages/ProductDetials";
import DashBoard from "../Pages/DashBoard";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import Error from "../components/Error";
import Contacts from "../Pages/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
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
        loader: () => fetch("../products.json"),
        element: <Statistics></Statistics>,
      },
      {
        path: "/product/:id",
        element: <ProductDetials></ProductDetials>,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
        children: [
          {
            path: "/dashboard",
            element: <Cart></Cart>,
          },
          {
            path: "/dashboard/cart",
            element: <Cart></Cart>,
          },
          {
            path: "/dashboard/wishlist",
            element: <Wishlist></Wishlist>,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contacts></Contacts>,
      },
    ],
  },
]);
export default router;
