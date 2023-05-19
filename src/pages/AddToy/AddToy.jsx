import React from "react";
import { useContext } from "react";
import swal from "sweetalert";
import { Authcontext } from "../provider/Authprovider";
import Hooks from "../Hooks/Hooks";

const AddToy = () => {
  const { user } = useContext(Authcontext);
  Hooks("Add Toy");
  const handleAdd = (event) => {
    event.preventDefault();
    const sellername = event.target.sellername.value;
    const email = event.target.email.value;
    const name = event.target.name.value;
    const pic = event.target.pic.value;
    const subcategory = event.target.subcategory.value;
    const price = event.target.price.value;
    const rating = event.target.rating.value;
    const quantity = event.target.quantity.value;
    const details = event.target.details.value;
    const toyData = {
      sellername,
      email,
      name,
      pic,
      subcategory,
      price,
      rating,
      quantity,
      details,
    };
    console.log(toyData);
    fetch("https://assignment-project-server-two.vercel.app/dolls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("Toy Added", "success", "success");
        }
      });
  };

  return (
    <div className="md:mt-8 mt-52">
      <div>
        <h2 className="text-center mb-5 md:mb-0 md:w-1/4 w-1/2  md:text-4xl text-2xl mx-auto bg-black p-3 text-white font-['cursive'] font-bold tracking-wider ">
          Add Toy
        </h2>
      </div>
      <div className="overflow-x-hidden">
        <div className="md:mx-12 mt-10 bg-[#F5EAEA] p-4">
          <form onSubmit={handleAdd} className="pb-16">
            {/* first div */}
            <div className="md:flex gap-4 items-center">
              <div className="form-control text-xl md:w-1/2 ">
                <label className="label">
                  <span className="label-text text-xl font-serif">
                    Seller Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={user.displayName}
                    disabled
                    name="sellername"
                    placeholder="Enter Seller Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control text-xl md:w-1/2 ">
                <label className="label">
                  <span className="label-text text-xl font-serif">
                    Seller Email
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="email"
                    defaultValue={user.email}
                    disabled
                    name="email"
                    placeholder="Enter Seller Email"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* second div */}
            <div className="md:flex gap-4 items-center">
              <div className="form-control text-xl md:w-1/2 ">
                <label className="label">
                  <span className="label-text text-xl font-serif">
                    Toy Name
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    required
                    name="name"
                    placeholder="Enter Toy Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control text-xl md:w-1/2 ">
                <label className="label">
                  <span className="label-text text-xl font-serif">
                    Picturl URL
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="url"
                    name="pic"
                    required
                    placeholder="Enter Picturl URL"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* 3rd div */}
            <div className="md:flex gap-4 items-center">
              <div className="form-control text-xl md:w-1/2 ">
                <label className="label">
                  <span className="label-text text-xl font-serif">
                    Sub-Category
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="subcategory"
                    required
                    placeholder="Enter Sub-Category"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control text-xl md:w-1/2 ">
                <label className="label">
                  <span className="label-text text-xl font-serif">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="price"
                    required
                    placeholder="Enter Price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* 4th category */}
            <div className="md:flex gap-4 items-center">
              <div className="form-control text-xl md:w-1/2 ">
                <label className="label">
                  <span className="label-text text-xl font-serif">Rating</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    required
                    name="rating"
                    placeholder="Enter Rating"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control text-xl md:w-1/2 ">
                <label className="label">
                  <span className="label-text text-xl font-serif">
                    Available Quantity
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    required
                    name="quantity"
                    placeholder="Enter Available Quantity"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* 5th category */}
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-serif">
                    Details Description
                  </span>
                </label>
                <textarea
                  name="details"
                  required
                  className="textarea textarea-bordered h-24"
                  placeholder="Details Description"
                ></textarea>
              </div>
            </div>
            <input
              type="submit"
              value="Add Toy"
              className="btn btn-block mt-5  text-xl font-serif bg-[#66347F]"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
