import Card from "../../../components/UI/Card/Card";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFecth";

const Services = () => {
  const [data] = useFetch("http://localhost:9000/services");
  return (
    <div className="mx-auto max-w-2xl mt-12 px-4 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex flex-col justify-center items-center gap-2">
        <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
        <h2 className="text-5xl">Our Service Area</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {data.map((item) => {
          return <Card key={item._id} item={item} />;
        })}
      </div>

      <div className="flex justify-center items-center mt-16 mb-32">
        <Link
          to="/car-services-pkg"
          className="border border-[#ff3811] py-2 px-4 text-[#ff3811]"
        >
          More Service
        </Link>
      </div>
    </div>
  );
};

export default Services;
