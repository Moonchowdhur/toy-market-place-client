import React, { useEffect, useState } from "react";
import Category from "../Category/Category";

const ShopBy = () => {
  const [category, setCategory] = useState([]);
  const [designone, setDesignone] = useState(false);
  const [designtwo, setDesigntwo] = useState(false);
  const [designthree, setDesignthree] = useState(false);

  const handleAmerican = () => {
    fetch(
      "https://assignment-project-server-two.vercel.app/dolls?subcategory=American%20girl"
    )
      .then((res) => res.json())
      .then((data) => setCategory(data));
    setDesignone(true);
    setDesigntwo(false);
    setDesignthree(false);
  };

  const handleBarbie = () => {
    fetch(
      "https://assignment-project-server-two.vercel.app/dolls?subcategory=Barbie"
    )
      .then((res) => res.json())
      .then((data) => setCategory(data));
    setDesigntwo(true);
    setDesignone(false);
    setDesignthree(false);
  };

  const handleBabydoll = () => {
    fetch(
      "https://assignment-project-server-two.vercel.app/dolls?subcategory=Baby%20Dolls"
    )
      .then((res) => res.json())
      .then((data) => setCategory(data));
    setDesignthree(true);
    setDesignone(false);
    setDesigntwo(false);
  };

  useEffect(() => {
    handleBarbie(); // Call handleAmerican when the component mounts
  }, []);

  return (
    <>
      <div className="mt-20 mb-16">
        <h2 className="text-center text-4xl font-bold tracking-widest font-['cursive']">
          Shop by Category
        </h2>
        <div className="mt-6 flex justify-center ">
          <div className="tabs gap-3 mx-auto">
            <button
              onClick={handleBarbie}
              className={`tab tab-bordered text-xl ${
                designtwo
                  ? "tab-active bg-purple-900 text-white"
                  : "bg-yellow-500 font-bold px-2 "
              }`}
            >
              Barbie
            </button>
            <button
              onClick={handleBabydoll}
              className={`tab tab-bordered  text-xl ${
                designthree
                  ? "tab-active bg-purple-900 text-white"
                  : "bg-yellow-500 font-bold px-2"
              }`}
            >
              Baby Dolls
            </button>
            <button
              onClick={handleAmerican}
              className={`tab text-xl tab-bordered ${
                designone
                  ? "tab-active bg-purple-900 text-white"
                  : "bg-yellow-500 font-bold px-2"
              }`}
            >
              American girl
            </button>
          </div>
        </div>
      </div>
      <div className="grid mb-12 gap-5 md:grid-cols-2 grid-cols-1">
        {category.map((toy) => (
          <Category key={toy._id} toy={toy}></Category>
        ))}
      </div>
    </>
  );
};

export default ShopBy;
