import React, { useEffect, useState } from "react";
import { getAllCarts, removeCart } from "../Utils";
import CartCard from "./CartCard";

const Cart = () => {
  const [product, setProduct] = useState([]);
  const [cost, setCost] = useState(0);

  useEffect(() => {
    const cartData = getAllCarts();
    setProduct(cartData);
    const totalCost = cartData.reduce((sum, item) => sum + item.price, 0);
    setCost(totalCost);
  }, []);
  const handelSort = () => {
    const sorted = [...product].sort((a, b) => b.price - a.price);
    setProduct(sorted);
  };
  const handelRemove = (id) => {
    removeCart(id);
    const cartData = getAllCarts();
    setProduct(cartData);
  };
  return (
    <div className="mx-6">
      <div className="flex mb-11 mt-12 justify-between">
        <h1 className="font-bold text-xl">Cart</h1>
        <div className="flex items-center gap-4">
          <h3 className="font-bold text-lg">Total Cost:{cost}</h3>
          <button
            className="px-5 rounded-full py-3 border font-semibold text-[#9538E2] border-[#9538E2]"
            onClick={handelSort}
          >
            Sort by Price
          </button>
          <button className="px-5 rounded-full py-3 bg-[#9538E2] text-white">
            Purchase
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {product.map((item) => (
          <CartCard
            handelRemove={handelRemove}
            item={item}
            key={item.product_id}
          ></CartCard>
        ))}
      </div>
    </div>
  );
};

export default Cart;
