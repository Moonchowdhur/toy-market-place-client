import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
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
    <div className="md:mx-12 p-4 mt-8">
      <h2 className="text-center w-1/4 mx-auto bg-black p-3 text-white font-['cursive'] text-4xl font-bold tracking-wider ">
        Details of {name}
      </h2>
      <div className="mt-8 md:flex gap-5">
        <div className="md:w-1/2">
          <img src={pic} className="w-[400px] h-[400px] rounded-full" alt="" />
        </div>
        <div className="space-y-4 md:w-1/2">
          <h2>Name:{name}</h2>
          <div className=" space-y-2">
            <p>Seller Name:{sellername}</p>
            <p>Seller Email:{email}</p>
          </div>
          <div className="flex items-center gap-5">
            <p>Price:{price}</p>
            <p>Rating:{rating}</p>
            <p>Available Quantity:{quantity}</p>
          </div>
          <div>Description:{details}</div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
