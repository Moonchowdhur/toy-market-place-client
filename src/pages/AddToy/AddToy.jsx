import React from "react";
import swal from "sweetalert";

const AddToy = () => {
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
    fetch("http://localhost:5000/dolls", {
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
    <div>
      <div className="overflow-x-hidden">
        {/* <div
          className="hero mt-16 w-full md:mx-12  h-[30vh]"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1613722860912-50da017439c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")`,
          }}
        >
          <div className="hero-overlay  bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Add Dolls</h1>
            </div>
          </div>
        </div> */}
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
