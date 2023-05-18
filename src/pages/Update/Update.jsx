import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUpdatedToy = useLoaderData();

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
  } = loadedUpdatedToy;

  const handleUpdate = (event) => {
    event.preventDefault();
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const details = event.target.details.value;
    const toyData = {
      price,
      quantity,
      details,
    };
    console.log(toyData);
    fetch(`http://localhost:5000/dolls/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toyData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          swal("Toy Updated", "success", "success");
        }
      });
  };

  return (
    <div className="md:mx-12 p-4 mt-8">
      <h2 className="text-center w-1/4 mx-auto bg-black p-3 text-white font-['cursive'] text-4xl font-bold tracking-wider ">
        Update of {name}
      </h2>
      <div className=" mt-10 bg-[#F5EAEA] p-4">
        <form className="pb-16" onSubmit={handleUpdate}>
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
                  disabled
                  readOnly
                  value={sellername}
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
                  disabled
                  readOnly
                  value={email}
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
                <span className="label-text text-xl font-serif">Toy Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  disabled
                  readOnly
                  value={name}
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
                  disabled
                  readOnly
                  value={pic}
                  name="pic"
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
                  disabled
                  readOnly
                  value={subcategory}
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
                  type="number"
                  defaultValue={price}
                  name="price"
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
                  value={rating}
                  disabled
                  readOnly
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
                  defaultValue={quantity}
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
                defaultValue={details}
                className="textarea textarea-bordered h-24"
                placeholder="Details Description"
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            value="Update Toy"
            className="btn btn-block mt-5  text-xl font-serif bg-[#66347F]"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
