import Banner from "../../components/Banner/Banner";
import img from "../../assets/images/banner/3.jpg";
import Feedback from "./Feedback/Feedback";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ServiceDetails = () => {
  const [pkg, setpkg] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setpkg(data[0]));
  }, [id]);
  if (pkg) {
    localStorage.setItem("id", pkg._id);
  }
  return (
    <>
      {pkg && (
        <div>
          <Banner
            title="Service Details"
            path1="Home"
            path2="Service Details"
          />
          <div className="container mx-auto mb-4 mt-12">
            <div className="flex p-8">
              {/* Image */}
              <div className="flex-shrink-0 w-4/12">
                <img src={pkg.image} alt="Service" className="w-20% h-auto" />
              </div>
              {/* Details */}
              <div className="flex-grow ml-8">
                <h1 className="text-2xl font-semibold">{pkg.serviceName}</h1>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500 text-lg">&#9733; 4.5</span>
                  <span className="ml-2 text-gray-600">Rating</span>
                </div>
                <div className="text-lg font-medium text-gray-700 mt-2">
                  Price: ${pkg.servicePrice}
                </div>
                <div>
                  <p className="mt-3">{pkg.serviceDetails}</p>
                </div>
                <div>
                  <p className="font-medium mt-3">
                    Duration: {pkg.serviceDuration}
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    to="/appointment"
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mt-12 mb-4">Reviews</h3>
            <Feedback name={"Alice"} date={"January 11, 2023"} />
            <Feedback name={"Bob"} date={"April 15, 2023"} />
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceDetails;
