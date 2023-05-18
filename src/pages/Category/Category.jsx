import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Category = ({ toy }) => {
  const {
    sellername,
    email,
    name,
    pic,
    subcategory,
    price,
    rating,
    quantity,
    details,
    _id,
  } = toy;

  console.log(toy, _id);

  return (
    <div className="border bg-[#F5EBEB] p-4 border-[#66347F] rounded-lg shadow-2xl ">
      <div className="flex ">
        <div className="md:w-1/2 ">
          <img
            className="w-[200px] rounded-full  h-[200px] object-fill"
            src={pic}
            alt=""
          />
        </div>
        <div className="p-4 md:w-1/2 ">
          <h2 className=" font-medium text-3xl">Name:{name}</h2>
          <div className="flex mt-4 mb-6 gap-2">
            <h2 className="font-bold">Price:${price}</h2>
            <p className="flex font-bold items-center ">
              <span className="">Rating</span>
              <AiFillStar className="text-yellow-500 font-bold" />:{rating}
            </p>
          </div>
          <Link
            to={`/viewdetails/${_id}`}
            className=" text-white bg-[#66347F] px-2 py-2 rounded-xl"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
