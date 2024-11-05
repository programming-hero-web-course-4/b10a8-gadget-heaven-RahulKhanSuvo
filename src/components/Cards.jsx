import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const Cards = () => {
  const { category } = useParams();
  const products = useLoaderData();
  const [filterProducts, setFilterProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating a delay for loading state (you can replace this with actual fetching logic)
        await new Promise((resolve) => setTimeout(resolve, 500));
        if (category) {
          const filtered = [...products].filter(
            (product) => product.category === category
          );
          setFilterProducts(filtered);
        } else {
          setFilterProducts(products);
        }
      } catch (err) {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [products, category]);

  if (loading) {
    return <p className="text-2xl text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div className="p-4">
      {filterProducts.length === 0 ? (
        <p className="text-4xl text-center">No data found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterProducts.map((product) => (
            <Card product={product} key={product.product_id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
