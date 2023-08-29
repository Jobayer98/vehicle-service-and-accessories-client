import { AiFillStar } from "react-icons/ai";
import quote from "../../../assets/icons/quote.png";
const TestiCard = () => {
  return (
    <div className="border p-8 rounded-lg flex flex-col gap-4 mx-16 lg:mx-12">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
            className="h-16 w-16 rounded-full"
          />

          <div>
            <h3 className="text-xl font-bold">Awlad Hossain</h3>
            <p className="text-slate-500 font-semibold">Bussinessman</p>
          </div>
        </div>
        <div>
          <img src={quote} alt="quote" />
        </div>
      </div>
      <p className="text-slate-500 text-sm">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which do not look even slightly believable.{" "}
      </p>
      <div className="flex items-center">
        <AiFillStar className="text-yellow-600" />
        <AiFillStar className="text-yellow-600" />
        <AiFillStar className="text-yellow-600" />
        <AiFillStar className="text-yellow-600" />
        <AiFillStar className="text-yellow-600" />
      </div>
    </div>
  );
};

export default TestiCard;
