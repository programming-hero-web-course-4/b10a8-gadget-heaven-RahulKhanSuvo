import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import CartContext from "../Routes/CartContext";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { getAllLove } from "../Utils/loveList";
import { getAllCarts } from "../Utils";

const MainLayout = () => {
  const { pathname } = useLocation();
  const [product, setProduct] = useState([]);
  const [loves, setLoves] = useState([]);

  const removeCartLove = (productId) => {
    setProduct((prevProducts) =>
      prevProducts.filter((item) => item.product_id !== productId)
    );
  };
  useEffect(() => {
    const allLove = getAllLove();
    setLoves(allLove);
    const allCart = getAllCarts();
    setProduct(allCart);
  }, []);
  const callLoveData = () => {
    const allLove = getAllLove();
    setLoves(allLove);
  };
  const callCartData = () => {
    const allCart = getAllCarts();
    setProduct(allCart);
  };
  const removeWishList = (productId) => {
    setLoves((prevLoves) =>
      prevLoves.filter((item) => item.product_id !== productId)
    );
  };
  const resetCartAndLoves = () => {
    setProduct([]);
    setLoves([]);
  };
  const containerBg =
    pathname === "/" ||
    pathname === "/category/Phone" ||
    pathname === "/category/Laptop" ||
    pathname === "/category/Accessories" ||
    pathname === "/category/Smart%20Watches"
      ? "bg-[#9538E2] mx-4 rounded-t-lg "
      : "text-black bg-white pt-4";
  const mainBg =
    pathname === "/" ||
    pathname === "/category/Phone" ||
    pathname === "/category/Laptop" ||
    pathname === "/category/Accessories" ||
    pathname === "/category/Smart%20Watches"
      ? "bg-[#F7F7F7]  pt-4"
      : "bg-[#F7F7F7]";
  const innerContainerMargin =
    pathname === "/" ||
    pathname === "/category/Phone" ||
    pathname === "/category/Laptop" ||
    pathname === "/category/Accessories" ||
    pathname === "/category/Smart%20Watches"
      ? "mx-4 "
      : "";
  const pageMetaData = {
    "/": {
      title: "Gadget | Gadget Heaven",
      description:
        "Welcome to Gadget Heaven, your one-stop shop for the latest gadgets.",
    },
    "/statistics": {
      title: "Statistics | Gadget Heaven",
      description:
        "Check out the latest statistics and trends in the gadget market.",
    },
    "/contact": {
      title: "Contact Us | Gadget Heaven",
      description: "Get in touch with us for any inquiries or support.",
    },
    "/dashboard": {
      title: "Dashboard | Gadget Heaven",
      description: "Manage your gadgets, cart, and wishlist.",
    },
    "/dashboard/cart": {
      title: "Cart | Gadget Heaven",
      description: "View and manage your shopping cart.",
    },
    "/dashboard/wishlist": {
      title: "Wishlist | Gadget Heaven",
      description: "Explore your saved items in the wishlist.",
    },
  };
  const currentMeta = pageMetaData[pathname] || pageMetaData["/"];
  return (
    <HelmetProvider>
      <CartContext.Provider
        value={{
          product,
          removeCartLove,
          loves,
          removeWishList,
          resetCartAndLoves,
          callLoveData,
          callCartData,
        }}
      >
        <Helmet>
          <title>{currentMeta.title}</title>
          <meta name="description" content={currentMeta.description} />
        </Helmet>
        <div className={mainBg}>
          <div className={containerBg}>
            <div>
              <div className="container mx-auto">
                <NavBar />
              </div>
            </div>
          </div>
          <div className={`${innerContainerMargin} min-h-[calc(100vh-280px)]`}>
            <Outlet />
          </div>

          <Footer />
          <Toaster />
        </div>
      </CartContext.Provider>
    </HelmetProvider>
  );
};

export default MainLayout;
