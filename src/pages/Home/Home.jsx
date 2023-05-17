import React from "react";

const Home = () => {
  return (
    <div className="mt-14 md:mx-12 ">
      {/* banner */}
      <div
        className="hero h-[80vh]"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1603362305486-75a25f73051a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl md:text-6xl font-serif tracking-wider font-bold">
              Better <span className="text-[#E7CBCB]">Kids</span>, Better
              <span className="text-[#E7CBCB]">World</span>
            </h1>
            <p className="mb-5  text-xl font-serif tracking-wider ">
              Doll always represented the fact that a woman has choices.
            </p>
            <button className="btn text-base font-serif tracking-wider bg-[#66347F]">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      {/* gallary section */}
      <div className="mt-16">
        <h2 className="text-center text-4xl font-bold tracking-widest font-['cursive']">
          Gallary Section
        </h2>
        <p className="text-center text-xl font-bold tracking-widest font-['cursive']">
          Most Popular Dolls
        </p>
        <div className="grid mt-8 gap-5 md:grid-cols-3 grid-cols-1">
          <div className="p-4 bg-[#66347F] shadow-xl  shadow-[#66347F]">
            <img
              src="https://m.media-amazon.com/images/I/715NgkS8p7L._SL1500_.jpg"
              alt=""
              className="w-[300px] mx-auto h-[300px]"
            />
          </div>
          <div className="p-4 shadow-xl bg-[#FEF2F4]  shadow-[#66347F]">
            <img
              src="https://rukminim1.flixcart.com/image/416/416/kdukgi80/doll-doll-house/m/y/h/cute-baby-doll-mmb-original-imafunuytxaj2xth.jpeg?q=70"
              alt=""
              className="w-[300px] mx-auto h-[300px]"
            />
          </div>
          <div className="p-4 shadow-xl bg-[#FEF2F4]  shadow-[#66347F]">
            <img
              src="https://m.media-amazon.com/images/I/715NgkS8p7L._SL1500_.jpg"
              alt=""
              className="w-[300px] mx-auto h-[300px]"
            />
          </div>
          <div className="p-4  shadow-xl bg-[#FEF2F4]  shadow-[#66347F]">
            <img
              src="https://rukminim1.flixcart.com/image/416/416/kdukgi80/doll-doll-house/m/y/h/cute-baby-doll-mmb-original-imafunuytxaj2xth.jpeg?q=70"
              alt=""
              className="w-[300px] mx-auto h-[300px]"
            />
          </div>
          <div className="p-4 shadow-xl bg-[#FEF2F4]  shadow-[#66347F]">
            <img
              src="https://m.media-amazon.com/images/I/715NgkS8p7L._SL1500_.jpg"
              alt=""
              className="w-[300px] mx-auto h-[300px]"
            />
          </div>
          <div className="p-4 shadow-xl bg-[#FEF2F4]  shadow-[#66347F]">
            <img
              src="https://rukminim1.flixcart.com/image/416/416/kdukgi80/doll-doll-house/m/y/h/cute-baby-doll-mmb-original-imafunuytxaj2xth.jpeg?q=70"
              alt=""
              className="w-[300px] mx-auto h-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
