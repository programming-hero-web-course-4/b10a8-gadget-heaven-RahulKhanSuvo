import toast from "react-hot-toast";

const getAllLove = () => {
  const all = localStorage.getItem("love");
  if (all) {
    const carts = JSON.parse(all);
    return carts;
  } else {
    return [];
  }
};
const addLove = (product) => {
  const carts = getAllLove();
  const isExist = carts.find((item) => item.product_id === product.product_id);
  if (isExist) return toast.error("already added");
  carts.push(product);
  localStorage.setItem("love", JSON.stringify(carts));
  toast.success("Successfully added!");
};
const removeLove = (id) => {
  const carts = getAllLove();
  const remin = carts.filter((item) => item.product_id !== id);
  localStorage.setItem("love", JSON.stringify(remin));
  toast.success("Successfully removed!");
};
export { addLove, getAllLove, removeLove };
