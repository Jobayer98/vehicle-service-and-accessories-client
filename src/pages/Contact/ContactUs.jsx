import Banner from "../../components/Banner/Banner";
import Form from "./Form";
import Touch from "./Touch";

const ContactUs = () => {
  return (
    <div className="max-w-screen-lg mx-auto ">
      <Banner title={"Contact Us"} path1={"Home"} path2={"Contact-us"} />
      <div className="flex-none lg:flex items-center gap-4 mt-16">
        <Touch />
        <Form />
      </div>
    </div>
  );
};

export default ContactUs;
