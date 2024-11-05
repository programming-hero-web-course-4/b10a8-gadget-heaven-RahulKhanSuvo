import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import CartContext from "../Routes/CartContext";
import { Helmet, HelmetProvider } from "react-helmet-async";

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

  const resetCartAndLoves = () => {
    setProduct([]);
    setLoves([]);
  };
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
    "/product/:id": {
      title: "Product Details | Gadget Heaven",
      description: "Discover more about this gadget.",
    },
  };
  const currentMeta = pageMetaData[pathname] || pageMetaData["/"];

  return (
    <HelmetProvider>
      <Helmet>
        <title>{currentMeta.title}</title>
        <meta name="description" content={currentMeta.description} />
      </Helmet>
      <CartContext.Provider
        value={{
          product,
          handelCart,
          removeCartLove,
          loves,
          handelLoveNav,
          removeWishList,
          resetCartAndLoves,
        }}
      >
        <div className={`bg-[#D9D9D9] pt-4`}>
          <div className={`bg-[#9538E2] mx-4 rounded-t-lg`}>
            <div className="container mx-auto">
              <NavBar />
            </div>
          </div>
          <div className={`mx-4 min-h-[calc(100vh-280px)]`}>
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
