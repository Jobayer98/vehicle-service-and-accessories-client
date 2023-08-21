import Banner from "./Banner/Banner";
import Service from "./Services/Services";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Products from "./Products/Products";
import OurTeam from "./OurTeam/OurTeam";
import Features from "./Features/Features";
const HomePage = () => {
  return (
    <>
      <Banner />
      <About />
      <div className="max-w-screen-lg mx-auto">
        <Service />
        <Contact />
        <Products />
        <OurTeam />
      </div>
      <Features />
    </>
  );
};

export default HomePage;
