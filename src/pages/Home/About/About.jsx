import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-screen-xl block lg:flex justify-center items-center gap-6 mt-32 mx-auto">
      <div className="lg:w-1/2 relative">
        <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
        <img
          src={parts}
          className="w-1/2 absolute right-10 top-1/2 rounded-lg border-8 border-white shadow-2xl"
        />
      </div>
      <div className="mt-24 lg:mt-0 text-center lg:text-left lg:w-1/2 flex flex-col gap-6 ">
        <h3 className="text-3xl text-[#ff3811] font-bold">About Us</h3>
        <h1 className="text-4xl font-bold w-[90%]">
          We are qualified & of experience in this field
        </h1>
        <p className="w-60% lg:w-[90%]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
        <p className="w-60% lg:w-[90%]">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{" "}
        </p>
        <div>
          <Link
            to="/About-us"
            className="px-3 py-2 rounded-lg bg-[#ff3811] w-fit text-white font-medium"
          >
            Get More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
