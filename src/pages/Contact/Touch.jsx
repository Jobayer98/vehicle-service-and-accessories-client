import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiLocationPlus, BiMailSend, BiPhoneCall } from "react-icons/bi";

const Touch = () => {
  return (
    <div className="w-full lg:w-[40%] sm:text-center mb-12 p-4 lg:p-0">
      <div>
        <h1 className="text-4xl font-bold mb-3">Get In Touch</h1>
        <p className="text-gray-500">
          This is a phrase used to encourage communication, often between
          individuals or businesses, to connect or resolve issues.
        </p>
      </div>
      <div className="grid justify-center">
        <ul className="flex flex-col gap-8 my-8">
          <li className="flex gap-4 justify-start">
            <span className="bg-[#ffebe7] w-16 h-16 flex justify-center items-center rounded-full">
              <BiPhoneCall className="text-3xl text-[#d32e0dda]" />
            </span>
            <span>
              <p className="text-gray-500 font-medium text-left">Phone Call</p>
              <p className="text-xl text-gray-900 font-semibold">
                +123-907-555-101
              </p>
            </span>
          </li>
          <li className="flex gap-4 items-center">
            <div className="bg-[#ffebe7] w-16 h-16 flex justify-center items-center rounded-full">
              <BiMailSend className="text-3xl text-[#d32e0dda]" />
            </div>
            <span>
              <p className="text-gray-500 font-medium text-left">
                Email Drop us
              </p>
              <p className="text-xl text-gray-900 font-semibold">
                quickfix@gmail.com
              </p>
            </span>
          </li>
          <li className="flex gap-4 items-center">
            <div className="bg-[#ffebe7] w-16 h-16 flex justify-center items-center rounded-full">
              <BiLocationPlus className="text-3xl text-[#d32e0dda]" />
            </div>
            <span>
              <p className="text-gray-500 font-medium text-left">Location</p>
              <p className="text-xl text-gray-900 font-semibold">
                Madani Avenue, 100 feet, Vatara
              </p>
            </span>
          </li>
        </ul>
      </div>
      <div className="border-t pt-5">
        <p className="text-xl text-gray-900 font-semibold mb-4">Follow Us</p>
        <div className="flex items-center sm:justify-center gap-3">
          <div className="bg-slate-100 p-4 rounded-full">
            <FaFacebook className="text-xl" />
          </div>
          <div className="bg-slate-100 p-4 rounded-full">
            <FaTwitter className="text-xl" />
          </div>
          <div className="bg-slate-100 p-4 rounded-full">
            <FaLinkedin className="text-xl" />
          </div>
          <div className="bg-slate-100 p-4 rounded-full">
            <FaInstagram className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Touch;
