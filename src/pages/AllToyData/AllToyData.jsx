import React from "react";
import { Link } from "react-router-dom";

const AllToyData = ({ toys, index }) => {
  //   console.log(toys);
  //   console.log(index);
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
  } = toys;
  return (
    <tr className=" font-serif">
      <th>{index}</th>
      <td>{sellername}</td>
      <td>{name}</td>
      <td>
        <img src={pic} className="w-10 h-10 rounded-full" alt="" />
      </td>
      <td>{subcategory}</td>
      <td>{price}k</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/details/${_id}`}>
          <button className="bg-[#66347F] text-white font-serif px-2 py-1 rounded-lg">
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default AllToyData;
