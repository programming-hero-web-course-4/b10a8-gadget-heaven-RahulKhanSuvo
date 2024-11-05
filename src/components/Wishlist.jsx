import { useContext, useEffect, useState } from "react";
import { getAllLove, removeLove } from "../Utils/loveList";
import CartCard from "./CartCard";
import RemoveContext from "../Utils/RemoveContext";
const Wishlist = () => {
  const { removeWishList } = useContext(RemoveContext);

  const [loveData, setLoveData] = useState([]);
  useEffect(() => {
    const data = getAllLove();
    setLoveData(data);
  }, []);
  const handelRemove = (id) => {
    removeLove(id);
    const data = getAllLove();
    setLoveData(data);
    removeWishList(id);
  };

  return (
    <div className="mx-6 mt-12">
      <div>
        <h1 className="font-bold text-xl">Wishlist</h1>
      </div>
      {loveData.length > 0 ? (
        <div className="flex mt-9 flex-col gap-6">
          {loveData.map((item) => (
            <CartCard
              handelRemove={handelRemove}
              key={item.product_id}
              item={item}
            ></CartCard>
          ))}
        </div>
      ) : (
        <div className="text-center font-bold text-4xl"> No data Found</div>
      )}
    </div>
  );
};

export default Wishlist;
