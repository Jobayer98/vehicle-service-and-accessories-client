import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../../context/cartContext";

const ProductItem = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const handleClick = () => {
    addToCart(product);
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchProduct = await axios.get(
        `http://localhost:9000/products/${id}`
      );
      setProduct(fetchProduct.data);
    };
    fetchData();
  }, [id]);

  return (
    <>
      {product.length !== 0 ? (
        <div className="container mx-auto my-20 flex justify-center items-center gap-8 lg:px-64">
          <div className="w-1/2">
            <figure>
              <img className="" src={product.image} alt={product.name} />
            </figure>
          </div>
          <div className="w-1/2 flex flex-col gap-3">
            <p className="text-gray-500">Product Name</p>
            <h1 className="text-3xl font-semibold">{product.name}</h1>
            {/* <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
                readOnly
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
                readOnly
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
                readOnly
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />

              <p className="ml-6">4 Reviews</p>
            </div> */}
            <p className="text-gray-700 my-3">{product.description}</p>
            <div className="divider"></div>
            <div className="flex  items-center justify-between">
              <p className="text-gray-700 text-2xl font-semibold">
                Price: ${product.price}
              </p>
              <button
                onClick={handleClick}
                className="bg-indigo-500 text-white font-medium px-3 py-1 rounded"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <span className="loading loading-spinner text-secondary absolute top-1/3 left-1/2"></span>
      )}
    </>
  );
};

export default ProductItem;
