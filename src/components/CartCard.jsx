import { IoCloseCircleOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
const CartCard = ({ item, handelRemove, removeCartLove }) => {
  const { pathname } = useLocation();

  const { price, product_id, product_title, product_image, description } = item;
  const handelRemoveAll = () => {
    handelRemove(product_id);
    removeCartLove(product_id);
  };
  return (
    <div className="relative">
      <div className="p-8 gap-6 rounded-xl flex bg-white items-center">
        <div>
          <img
            className="w-[200px] object-center h-[124px]"
            src={product_image}
            alt=""
          />
        </div>
        <div>
          <div className="">
            <h3 className="font-semibold">{product_title}</h3>
          </div>
          <p className="text-gray-500 my-4 text-sm">{description}</p>
          <p> Price:${price}</p>
          {pathname === "/dashboard/wishlist" && (
            <button className="flex items-center mt-2 gap-2 px-6 py-3 text-white bg-[#9538E2] rounded-full font-bold">
              Add To Card
            </button>
          )}
        </div>
      </div>
      <button onClick={handelRemoveAll} className="absolute top-5 right-2">
        <IoCloseCircleOutline className="text-red-700 text-4xl" />
      </button>
    </div>
  );
};

export default CartCard;
