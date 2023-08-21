import { Rating } from "@smastrom/react-rating";
import React from "react";

const Feedback = ({ name, date }) => {
  return (
    <div className="w-1/2">
      <div className="flex gap-4 pb-2">
        <div className="mt-2">
          <img
            className="w-10 h-10 rounded-full"
            src="http://localhost:5173/src/assets/images/banner/3.jpg"
          />
        </div>
        <div>
          <div>
            <span className="text-yellow-500 text-2xl">&#9733;</span>
            <span className="text-yellow-500 text-2xl">&#9733;</span>
            <span className="text-yellow-500 text-2xl">&#9733;</span>
            <span className="text-yellow-500 text-2xl">&#9733;</span>
            <span className="text-yellow-500 text-2xl">&#9733;</span>
          </div>
          <div className="mb-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            aperiam!
          </div>
          <div>
            <h4 className="font-medium">{name}</h4>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Feedback;
