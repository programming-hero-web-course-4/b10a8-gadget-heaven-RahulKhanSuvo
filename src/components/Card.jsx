import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { price, product_id, product_title, product_image } = product;
  return (
    <div className=" flex flex-col bg-white p-6 rounded-lg">
      <div className=" flex-grow">
        <img className=" " src={product_image} alt="" />
      </div>
      <div className="">
        <h1 className="font-semibold text-lg">{product_title}</h1>
        <p className="mb-4 mt-1 text-[#09080F99]">Price:{price}$</p>
        <Link
          className="border-[#9538E2] font-semibold text-[#9538E2] border-2 px-5 rounded-full py-3 "
          to={`/product/${product_id}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
