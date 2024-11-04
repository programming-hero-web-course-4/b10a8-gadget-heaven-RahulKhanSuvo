import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Cards = () => {
  const products = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card product={product} key={product.product_id}></Card>
      ))}
    </div>
  );
};

export default Cards;
