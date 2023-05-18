import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Authcontext } from "../provider/Authprovider";
import MyToysDetails from "../MyToysDetails/MyToysDetails";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const { user } = useContext(Authcontext);
  console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5000/dolls?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div className="md:mx-12 p-4 mt-8">
      <div>
        <h2 className="text-center w-1/4 mx-auto bg-black p-3 text-white font-['cursive'] text-4xl font-bold tracking-wider ">
          My Toys
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-[#F5EAEA] font-serif font-bold"></th>
                <th className="bg-[#F5EAEA] font-serif font-bold text-base">
                  Seller Name
                </th>
                <th className="bg-[#F5EAEA] text-black font-serif font-bold text-base">
                  Seller Email
                </th>

                <th className="bg-[#F5EAEA] font-serif font-bold text-base">
                  Image
                </th>
                <th className="bg-[#F5EAEA] font-serif font-bold text-base">
                  Toy Name
                </th>
                <th className="bg-[#F5EAEA] font-serif font-bold text-base">
                  Sub-category
                </th>
                <th className="bg-[#F5EAEA] font-serif font-bold text-base">
                  Price
                </th>
                <th className="bg-[#F5EAEA] font-serif font-bold text-base">
                  Rating
                </th>
                <th className="bg-[#F5EAEA] font-serif font-bold text-base">
                  Available <br />
                  Quantity
                </th>
                <th className="bg-[#F5EAEA] font-serif font-bold text-base">
                  Details
                </th>
                <th className="bg-[#F5EAEA] font-serif font-bold text-base"></th>
              </tr>
            </thead>
            <tbody>
              {toys.map((mytoy, index) => (
                <MyToysDetails
                  index={index + 1}
                  key={mytoy._id}
                  mytoy={mytoy}
                ></MyToysDetails>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
