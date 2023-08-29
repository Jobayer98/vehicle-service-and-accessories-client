import Banner from "../../components/Banner/Banner";
import About from "../Home/About/About";
import Features from "../Home/Features/Features";
import Testimonial from "../Home/Testimonial/Testimonial";
const AboutUs = () => {
  return (
    <div>
      <Banner title={"About Us"} path1={"Home"} path2={"About-us"} />
      <About />
      <Features />
      <Testimonial />
    </div>
  );
};

export default AboutUs;
