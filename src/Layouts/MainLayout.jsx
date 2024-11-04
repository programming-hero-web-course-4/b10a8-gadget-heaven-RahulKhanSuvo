import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import CartContext from "../Routes/CartContext";

const MainLayout = () => {
  const { pathname } = useLocation();
  const [product, setProduct] = useState([]);
  const [loves, setLoves] = useState([]);

  const handelCart = (data) => {
    if (product.some((item) => item.product_id === data.product_id)) return;
    setProduct([...product, data]);
  };

  const removeCartLove = (productId) => {
    setProduct((prevProducts) =>
      prevProducts.filter((item) => item.product_id !== productId)
    );
  };

  const handelLoveNav = (data) => {
    if (loves.some((item) => item.product_id === data.product_id)) return;
    setLoves([...loves, data]);
  };

  const removeWishList = (productId) => {
    setLoves((prevLoves) =>
      prevLoves.filter((item) => item.product_id !== productId)
    );
  };

  const containerBg =
    pathname === "/" ||
    pathname === "/category/Phone" ||
    pathname === "/category/Laptop" ||
    pathname === "/category/Accessories" ||
    pathname === "/category/Smart%20Watches"
      ? "bg-[#9538E2] mx-4 rounded-t-lg"
      : "text-black bg-white";
  const mainBg =
    pathname === "/" ||
    pathname === "/category/Phone" ||
    pathname === "/category/Laptop" ||
    pathname === "/category/Accessories" ||
    pathname === "/category/Smart%20Watches"
      ? "bg-[#D9D9D9] pt-4"
      : "bg-[#D9D9D9]";
  const innerContainerMargin =
    pathname === "/" ||
    pathname === "/category/Phone" ||
    pathname === "/category/Laptop" ||
    pathname === "/category/Accessories" ||
    pathname === "/category/Smart%20Watches"
      ? "mx-4"
      : "";

  return (
    <CartContext.Provider
      value={{
        product,
        handelCart,
        removeCartLove,
        loves,
        handelLoveNav,
        removeWishList,
      }}
    >
      <div className={mainBg}>
        <div className={containerBg}>
          <div className="container mx-auto">
            <NavBar />
          </div>
        </div>
        <div className={`${innerContainerMargin} min-h-[calc(100vh-280px)]`}>
          <Outlet />
        </div>

        <Footer />
        <Toaster />
      </div>
    </CartContext.Provider>
  );
};

export default MainLayout;
