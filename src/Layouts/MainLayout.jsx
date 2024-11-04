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
    const exists = product.some((item) => item.product_id === data.product_id);
    if (exists) return;
    setProduct([...product, data]);
  };

  const removeCartLove = (productId) => {
    setProduct((prevProducts) =>
      prevProducts.filter((item) => item.product_id !== productId)
    );
  };

  const handelLoveNav = (data) => {
    const exists = loves.some((item) => item.product_id === data.product_id);
    if (exists) return;
    setLoves([...loves, data]);
  };

  const removeWishList = (productId) => {
    setLoves((prevLoves) =>
      prevLoves.filter((item) => item.product_id !== productId)
    );
  };

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
      <div className="bg-[#D9D9D9] pt-4">
        <div className="bg-[#9538E2] mx-4 rounded-t-lg">
          <div className="container mx-auto">
            <NavBar />
          </div>
        </div>
        <div className="mx-4 min-h-[calc(100vh-280px)]">
          <Outlet />
        </div>

        <Footer />
        <Toaster />
      </div>
    </CartContext.Provider>
  );
};

export default MainLayout;
