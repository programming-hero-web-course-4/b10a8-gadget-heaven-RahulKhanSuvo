import { useEffect, useState } from "react";
import { getAllLove } from "../Utils/loveList";
import CartCard from "./CartCard";

const Wishlist = () => {
  const [loveData, setLoveData] = useState([]);
  useEffect(() => {
    const data = getAllLove();
    setLoveData(data);
  }, []);
  return (
    <div className="mx-6 mt-12">
      <div>
        <h1 className="font-bold text-xl">Wishlist</h1>
      </div>
      <div className="flex flex-col gap-6">
        {loveData.map((item) => (
          <CartCard key={item.product_id} item={item}></CartCard>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
