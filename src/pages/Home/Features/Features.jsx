import FeatureCard from "./FeatureCard";
import { HiUserGroup } from "react-icons/hi";
import { IoMdClock } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { FaTools } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";
const Features = () => {
  return (
    <div className="my-32">
      <div className="flex flex-col justify-center items-center gap-4 mb-8">
        <h3 className="text-2xl font-bold text-orange-600">Core Features</h3>
        <h2 className="text-4xl font-bold">Why Choose Us</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-8">
        <FeatureCard
          icon={<HiUserGroup className="text-5xl" />}
          name={"Expert Team"}
        />
        <FeatureCard
          icon={<IoMdClock className="text-4xl" />}
          name={"Timely Delivery"}
        />
        <FeatureCard
          icon={<BiSupport className="text-4xl" />}
          name={"24/7 Support"}
        />
        <FeatureCard
          icon={<FaTools className="text-4xl" />}
          name={"Best Equipment"}
        />
        <FeatureCard
          icon={<BsShieldFillCheck className="text-4xl" />}
          name={"100% Quranty"}
        />
      </div>
    </div>
  );
};

export default Features;
