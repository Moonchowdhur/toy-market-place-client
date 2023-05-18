import React from "react";
import { useLoaderData } from "react-router-dom";
import AllToyData from "../AllToyData/AllToyData";

const AllToy = () => {
  const loadedAllToy = useLoaderData();
  //   console.log(loadedAllToy);
  return (
    <div className="md:px-12 p-4">
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Image</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {loadedAllToy.map((toys) => (
                <AllToyData toys={toys} key={toys._id}></AllToyData>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToy;
