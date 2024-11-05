import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SubHeading from "../components/SubHeading";
import RatingComponent from "../components/RatingComponent";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { addCart, getAllCarts } from "../Utils";
import CartContext from "../Routes/CartContext";
import { addLove, getAllLove } from "../Utils/loveList";
import { Helmet } from "react-helmet-async";
const ProductDetials = () => {
  const { handelCart, handelLoveNav } = useContext(CartContext);
  const { id } = useParams();
  const productsData = useLoaderData();
  const [product, setProduct] = useState({});
  const [isAdded, setIsAdded] = useState(false);
  const [isLoveAdded, setLoveAdded] = useState(false);
  useEffect(() => {
    const oneData = productsData.find((product) => product.product_id === id);
    setProduct(oneData);
    const allCart = getAllCarts();
    const isExist = allCart.find(
      (item) => item.product_id === oneData.product_id
    );
    if (isExist) {
      setIsAdded(true);
    }
    const allLove = getAllLove();
    const i = allLove.find((item) => item.product_id === oneData.product_id);
    if (i) {
      setLoveAdded(true);
    }
  }, [productsData, id]);
  const {
    price,
    product_title,
    product_image,
    description,
    rating,
    availability,
    specification,
  } = product;
  const addToCart = (product) => {
    addCart(product);
    handelCart(product);
    setIsAdded(true);
  };
  const addToLove = (product) => {
    addLove(product);
    handelLoveNav(product);
    setLoveAdded(true);
  };
  return (
    <div className="relative">
      <Helmet>
        <title>{`${product_title} | Gadget Heaven`}</title>
      </Helmet>
      <div className="bg-[#9538E2] pb-64  pt-8">
        <SubHeading
          title={"Product Details"}
          subTitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></SubHeading>
      </div>
      <div className="p-8 absolute flex  rounded-3xl flex-col md:flex-row gap-6 mx-auto w-3/4 md: translate-x-24 lg:translate-x-56  top-36 bg-white">
        <div>
          <img className="h-[500px]" src={product_image} alt="" />
        </div>
        <div>
          <h1 className="font-semibold mb-3 text-xl">{product_title}</h1>
          <p className="font-semibold text-sm text-gray-500">Price:${price}</p>

          <div className="w-fit mt-4 border border-[#309C08] bg-[#EAF5E6] rounded-full px-3 py-2 font-medium text-[#309C08]">
            {availability ? <p className="">In stock</p> : <p>Out of stock</p>}
          </div>
          <p className="text-[#09080F99] my-4">{description}</p>
          <div>
            <h3 className="font-bold ">Specification</h3>
            <ul className="list-decimal list-inside my-3">
              {specification?.map((item, id) => (
                <li className="text-[#09080F99]" key={id}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Rating</h3>
            <div className="flex items-center gap-3">
              <RatingComponent></RatingComponent>
              <p className="px-3 py-1 rounded-full bg-[#F2F2F3]">{rating}</p>
            </div>
          </div>
          <div className="mt-4 flex gap-3 ">
            <button
              disabled={isAdded}
              onClick={() => addToCart(product)}
              className="flex items-center gap-2 disabled:bg-gray-600 px-6 py-3 text-white bg-[#9538E2] rounded-full font-bold"
            >
              Add To Card <IoCartOutline className="text-xl" />
            </button>
            <button
              disabled={isLoveAdded}
              className="bg-red-600 text-2xl disabled:bg-gray-600 rounded-full border-2 p-2"
              onClick={() => addToLove(product)}
            >
              <CiHeart className="size-14 text-white    " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetials;
