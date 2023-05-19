import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Authcontext } from "../provider/Authprovider";
import MyToysDetails from "../MyToysDetails/MyToysDetails";
import Hooks from "../Hooks/Hooks";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const { user } = useContext(Authcontext);
  console.log(user);

  Hooks("My Toy");
  useEffect(() => {
    fetch(
      `https://assignment-project-server-two.vercel.app/dolls?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    swal({
      title: "Do you want to Delete?",
      text: "Once deleted, you will not be able to recover this toy!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // swal("Toy has been deleted", {
        //   icon: "success",
        // });
        fetch(`https://assignment-project-server-two.vercel.app/dolls/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              swal("Toy has been deleted", {
                icon: "success",
              });
              const remaining = toys.filter((t) => t._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  };

  const handleSelect = (event) => {
    console.log(event.target.value);
    const selected = event.target.value;
    fetch(
      `https://assignment-project-server-two.vercel.app/dolls?sort=${selected}&email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  return (
    <div className="md:mx-12 p-4  md:mt-8 mt-52 ">
      <div>
        <h2 className="text-center mb-5 md:mb-0 md:w-1/4 w-1/2  md:text-4xl text-2xl mx-auto bg-black p-3 text-white font-['cursive'] font-bold tracking-wider ">
          My Toys
        </h2>
      </div>
      <select
        onChange={handleSelect}
        className="select select-bordered w-11/12 max-w-xs"
      >
        <option disabled selected>
          Sorting
        </option>
        <option>Ascending</option>
        <option>Descending</option>
      </select>
      <div>
        <div className="mt-7 overflow-x-auto">
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
                  handleDelete={handleDelete}
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
