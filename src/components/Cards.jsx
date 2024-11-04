import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const Cards = () => {
  const { category } = useParams();

  const products = useLoaderData();
  const [filterProducts, setFilterProducts] = useState([]);
  useEffect(() => {
    if (category) {
      const filtered = [...products].filter(
        (product) => product.category === category
      );
      setFilterProducts(filtered);
    } else {
      setFilterProducts(products);
    }
  }, [products, category]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filterProducts.map((product) => (
        <Card product={product} key={product.product_id}></Card>
      ))}
    </div>
  );
};

export default Cards;
