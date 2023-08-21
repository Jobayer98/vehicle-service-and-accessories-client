import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className="group relative border p-3 hover:shadow-lg transition-all duration-300">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-80">
        <img
          className="h-72 w-full object-cover object-center"
          src={item.image}
          alt={item.name}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className=" font-medium text-gray-700">{item.name}</h3>
        </div>
        <p className="text-sm font-medium text-gray-900">${item.price}</p>
        <Rating style={{ maxWidth: 130 }} value={item.rating} readonly />
      </div>
      <div className="text-center mt-5">
        <Link
          to={`/products/${item._id}`}
          className="mt-4 bg-indigo-500 text-white font-medium px-3 py-1 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
