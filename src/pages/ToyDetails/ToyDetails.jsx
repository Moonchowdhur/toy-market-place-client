import React from "react";
import { useLoaderData } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Hooks from "../Hooks/Hooks";

const ToyDetails = () => {
  Hooks("Details");
  const loadedToyDetails = useLoaderData();
  console.log(loadedToyDetails);
  const {
    _id,
    sellername,
    email,
    name,
    pic,
    subcategory,
    price,
    rating,
    quantity,
    details,
  } = loadedToyDetails;
  return (
    <div className="md:mx-12 md:mt-8 mt-52 p-4">
      <h2 className="text-center md:w-1/4 mx-auto bg-black p-3 text-white font-['cursive'] text-4xl font-bold tracking-wider ">
        Details of {name}
      </h2>
      <div className="mt-8 md:flex  gap-5">
        <div className="md:w-1/2 p-4 bg-[#F5EAEA] rounded-lg">
          <img
            src={pic}
            className="md:w-[400px] w-[200px] h-[200px] mx-auto md:h-[400px] rounded-full"
            alt=""
          />
        </div>
        <div className=" font-serif  rounded-lg p-6 bg-[#F5EAEA] md:w-1/2">
          <h2 className="text-3xl font-bold text-center">Name:{name}</h2>
          <div className=" text-lg font-medium mt-8 ">
            <p className="font-bold">
              <span className="text-[#66347F] font-bold">Seller Name:</span>
              {sellername}
            </p>
            <p className="mt-2 font-bold md:text-lg text-sm">
              <span className="text-[#66347F]">Seller Email:</span>
              {email}
            </p>
          </div>
          <div className="md:flex mt-6 font-bold text-lg items-center gap-5">
            <p>
              <span className="text-[#66347F]">Price:</span>${price}
            </p>
            <p className="flex items-center ">
              <span className="text-[#66347F]">Rating</span>
              <AiFillStar className="text-yellow-500 font-bold" />:{rating}
            </p>
            <p>
              <span className="text-[#66347F]">Available Quantity:</span>
              {quantity}
            </p>
          </div>
          <div className="mt-6 text-base  ">
            <span className="font-bold text-[#66347F] text-lg">
              Description:
            </span>
            {details}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
