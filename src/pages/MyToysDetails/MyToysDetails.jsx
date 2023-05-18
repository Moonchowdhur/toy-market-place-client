import React from "react";
import { Link } from "react-router-dom";

const MyToysDetails = ({ mytoy, index, handleDelete }) => {
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
  } = mytoy;
  return (
    <tr className="hover font-serif">
      <th>{index}</th>
      <td>{sellername}</td>
      <td className="text-sm">{email}</td>
      <td>
        <img src={pic} className="w-10 h-10 rounded-full" alt="" />
      </td>
      <td>{name}</td>
      <td>{subcategory}</td>
      <td>{price}k</td>
      <td>{rating}</td>
      <td>{quantity}</td>
      <td className="w-5">{details.slice(0, 40)}...</td>
      <td className="flex p-6 gap-2 items-center">
        <Link to={`/update/${_id}`}>
          <button className="bg-[#66347F] text-white font-serif px-1 py-1 rounded-lg">
            Update
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-[#66347F] text-white font-serif px-1 py-1 rounded-lg"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyToysDetails;
