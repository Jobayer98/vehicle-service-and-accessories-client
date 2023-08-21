import { Link } from "react-router-dom";
import img from "../../assets/images/banner/4.jpg";

const Banner = ({ title, path1, path2 }) => {
  return (
    <div
      className="h-[350px] bg-cover w-full relative rounded-lg"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0  bg-gradient-to-bl from-transparent to-[#000]">
        <h2 className="text-white mt-36 ml-20 text-4xl font-bold">{title}</h2>
        <div className="text-sm text-white breadcrumbs absolute left-1/2 bottom-0 -translate-x-1/2">
          <ul>
            <li>{path1}</li>
            <li>{path2}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
