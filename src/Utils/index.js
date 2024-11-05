import toast from "react-hot-toast";

const getAllCarts = () => {
  const all = localStorage.getItem("cart");
  if (all) {
    const carts = JSON.parse(all);
    return carts;
  } else {
    return [];
  }
};
const addCart = (product) => {
  const carts = getAllCarts();
  const isExist = carts.find((item) => item.product_id === product.product_id);
  if (isExist) return toast.error("already added");
  carts.push(product);
  localStorage.setItem("cart", JSON.stringify(carts));
  toast.success("Item added To Cart");
};
const removeCart = (id) => {
  const carts = getAllCarts();
  const remin = carts.filter((item) => item.product_id !== id);
  localStorage.setItem("cart", JSON.stringify(remin));
  toast.success("removed from cart!");
};
export { addCart, getAllCarts, removeCart };
