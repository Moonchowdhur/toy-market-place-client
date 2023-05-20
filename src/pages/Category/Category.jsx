import React from "react";
import { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Authcontext } from "../provider/Authprovider";
import swal from "sweetalert";

const Category = ({ toy }) => {
  const { user } = useContext(Authcontext);

  const handleDetails = () => {
    if (!user) {
      swal("You have to log in first to view details", "", "warning");
    }
  };

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
    <div className="border bg-[#F0F0F0] p-4 border-[#66347F] rounded-lg shadow-xl ">
      <div className="flex ">
        <div className="md:w-1/2 ">
          <img
            className="w-[200px] rounded-full  h-[200px] object-fill"
            src={pic}
            alt=""
          />
        </div>
        <div className="p-4 md:w-1/2 ">
          <h2 className=" font-medium text-xl text-fuchsia-800 md:text-3xl">
            Name: {name}
          </h2>
          <div className="md:flex mt-4 mb-8 gap-7 ">
            <h2 className="font-medium text-base">Price: ${price}</h2>
            <p className="flex gap-1 font-medium  items-center ">
              <span className="">Rating</span>
              <AiFillStar className="text-yellow-500 text-xl font-bold" />:{" "}
              {rating}
            </p>
          </div>
          <Link
            to={`/viewdetails/${_id}`}
            className=" text-white bg-[#66347F] px-2 py-2 rounded-xl"
          >
            <button onClick={handleDetails}>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
