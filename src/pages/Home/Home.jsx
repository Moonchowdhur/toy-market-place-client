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
    </div>
  );
};

export default Home;
