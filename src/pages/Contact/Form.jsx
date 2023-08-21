import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BiMessageRoundedDots, BiSolidSend } from "react-icons/bi";

const Form = () => {
  return (
    <div className="w-full lg:w-[60%] p-10 bg-[#f3f3f3]">
      <h1 className="text-3xl font-bold">Send A Message</h1>
      <form>
        <div className="flex-non lg:flex gap-7 mt-6">
          <div className="relative mb-6 lg:mb-0 ">
            <input
              className="bg-white p-3 pl-7 w-full outline-1 outline-[#db4426e8]"
              type="text"
              placeholder="Name"
            />
            <AiOutlineUser className="text-[#db4426e8] absolute top-4 left-2" />
          </div>
          <div className="relative">
            <input
              className="bg-white p-3 pl-7 w-full outline-1 outline-[#db4426e8]"
              type="email"
              placeholder="Email"
            />
            <AiOutlineMail className="text-[#db4426e8] absolute top-4 left-2" />
          </div>
        </div>
        <div className="relative mt-6">
          <textarea
            className="pl-7 w-full"
            name="Message"
            placeholder="Message"
            id=""
            cols="30"
            rows="5"
          ></textarea>
          <BiMessageRoundedDots className="text-[#db4426e8] absolute top-1 left-2" />
        </div>
        <div className="flex justify-end">
          <button className="bg-[#db4426e8] hover:bg-[#f53812] text-white px-3 py-2 mt-6 flex items-center gap-2">
            Send
            <BiSolidSend />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
