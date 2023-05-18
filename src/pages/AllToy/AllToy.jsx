import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllToyData from "../AllToyData/AllToyData";

const AllToy = () => {
  // const loadedAllToy = useLoaderData();
  //   console.log(loadedAllToy);
  const [loadedAllToy, setLoadedAllToy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/dolls")
      .then((res) => res.json())
      .then((data) => setLoadedAllToy(data));
  }, []);

  const handleSearch = (event) => {
    const toyName = event.target.value;
    console.log(toyName);
    if (toyName) {
      fetch(`http://localhost:5000/dolls?name=${toyName}`)
        .then((res) => res.json())
        .then((data) => setLoadedAllToy(data));
    }
  };

  return (
    <div className="md:px-12 mt-8 p-4">
      <div>
        <h2 className="text-center w-1/4 mx-auto bg-black text-white p-3 underline font-['cursive'] text-4xl font-bold tracking-widest ">
          All Toys Here
        </h2>
        <div onClick={handleSearch} className="flex form-control">
          <label className="input-group flex items-center justify-end">
            <input
              type="text"
              placeholder="Enter Toy Name"
              className="input input-bordered"
            />
            <span className="bg-fuchsia-900 py-4 text-white">Search</span>
          </label>
        </div>
      </div>
      <div>
        <div className=" mt-8 overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-[#F5EAEA] font-serif font-bold"></th>
                <th className="bg-[#F5EAEA] text-black font-serif font-bold text-base">
                  Seller
                </th>
                <th className="bg-[#F5EAEA] font-serif font-bold text-base">
                  Toy Name
                </th>
                <th className="bg-[#F5EAEA] font-serif font-bold text-base">
                  Image
                </th>
                <th className="bg-[#F5EAEA] font-serif font-bold text-base">
                  Sub-category
                </th>
                <th className="bg-[#F5EAEA] font-serif font-bold text-base">
                  Price
                </th>
                <th className="bg-[#F5EAEA] font-serif font-bold text-base">
                  Available <br />
                  Quantity
                </th>
                <th className="bg-[#F5EAEA] font-serif font-bold text-base">
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
