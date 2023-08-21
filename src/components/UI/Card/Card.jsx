import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="group relative border p-3">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          className="h-52 w-full object-cover object-center lg:h-72 lg:w-full"
          src={item.image}
          alt={item.serviceName}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className=" font-medium text-gray-700">{item.serviceName}</h3>
        </div>
        <p className="text-sm font-medium text-gray-900">
          ${item.servicePrice}
        </p>
      </div>

      <div>
        <Link
          to={`/service-details/${item._id}`}
          className="link link-primary mt-3"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
