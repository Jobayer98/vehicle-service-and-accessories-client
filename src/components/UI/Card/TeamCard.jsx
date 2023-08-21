import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const TeamCard = ({ img, name, profession }) => {
  return (
    <div className="w-[330px] pb-4 border shadow rounded-lg">
      <img className="h-52 w-full rounded-lg" src={img} alt="" />
      <div className="flex flex-col justify-center items-center gap-2">
        <h3 className="text-xl font-bold mt-3">{name}</h3>
        <p>{profession}</p>
        <div className="flex justify-center items-center gap-3">
          <BsFacebook className="text-xl text-blue-900" />
          <AiFillTwitterCircle className="text-2xl text-sky-600" />
          <BsLinkedin className="text-xl text-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
