import React from "react";
import { useLoaderData } from "react-router-dom";
import AllToyData from "../AllToyData/AllToyData";

const AllToy = () => {
  const loadedAllToy = useLoaderData();
  //   console.log(loadedAllToy);
  return (
    <div className="md:px-12 mt-8 p-4">
      <div>
        <h2 className="text-center bg-[#FFD95A] p-3 underline font-['cursive'] text-4xl font-bold tracking-widest ">
          All Toys Here
        </h2>
      </div>
      <div>
        <div className=" mt-8 overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-[#66347F] text-white font-serif font-bold"></th>
                <th className="bg-[#66347F] text-white font-serif font-bold text-base">
                  Seller
                </th>
                <th className="bg-[#66347F] text-white font-serif font-bold text-base">
                  Toy Name
                </th>
                <th className="bg-[#66347F] text-white font-serif font-bold text-base">
                  Image
                </th>
                <th className="bg-[#66347F] text-white font-serif font-bold text-base">
                  Sub-category
                </th>
                <th className="bg-[#66347F] text-white font-serif font-bold text-base">
                  Price
                </th>
                <th className="bg-[#66347F] text-white font-serif font-bold text-base">
                  Available <br />
                  Quantity
                </th>
                <th className="bg-[#66347F] text-white font-serif font-bold text-base">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {loadedAllToy.map((toys, index) => (
                <AllToyData
                  toys={toys}
                  index={index + 1}
                  key={toys._id}
                ></AllToyData>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToy;
