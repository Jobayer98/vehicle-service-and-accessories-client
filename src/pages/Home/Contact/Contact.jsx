import { FaCalendarDays, FaMapLocationDot } from "react-icons/fa6";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
const Contact = () => {
  return (
    <div className="bg-[#151515] text-slate-200 flex justify-evenly py-16 max-w-5xl mx-auto rounded-lg">
      <div className="flex items-center gap-3">
        <FaCalendarDays className="text-3xl" />
        <div>
          <p className="text-sm">We are open monday-friday</p>
          <p className="text-xl font-bold">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <BsFillTelephoneOutboundFill className="text-3xl" />
        <div>
          <p className="text-sm">We are open monday-friday</p>
          <p className="text-xl font-bold">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <FaMapLocationDot className="text-3xl" />
        <div>
          <p className="text-sm">Need a repair? our address</p>
          <p className="text-xl font-bold">Madani Avenue</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
