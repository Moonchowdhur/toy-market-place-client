import React from "react";
import ShopBy from "../ShopBy/ShopBy";

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
      <div className="mt-16 mb-16">
        <h2 className="text-center text-4xl font-bold tracking-widest font-['cursive']">
          Gallary Section
        </h2>
        <p className="text-center text-xl font-bold tracking-widest font-['cursive']">
          Most Popular Dolls
        </p>
        <div className="grid mt-8 gap-8 md:grid-cols-3 grid-cols-1">
          <div className="p-4 mb-6 rounded-xl bg-[#E4D0D0] shadow-xl  shadow-[#66347F]">
            <img
              src="https://m.media-amazon.com/images/I/715NgkS8p7L._SL1500_.jpg"
              alt=""
              className="w-[300px] rounded-full p-2 mx-auto h-[300px]"
            />
          </div>
          <div className="p-4 mb-6  shadow-xl rounded-xl bg-[#E4D0D0]  shadow-[#66347F]">
            <img
              src="https://rukminim1.flixcart.com/image/416/416/kdukgi80/doll-doll-house/m/y/h/cute-baby-doll-mmb-original-imafunuytxaj2xth.jpeg?q=70"
              alt=""
              className="w-[300px] rounded-full  mx-auto h-[300px]"
            />
          </div>
          <div className="p-4  mb-6 shadow-xl rounded-xl bg-[#E4D0D0]  shadow-[#66347F]">
            <img
              src="https://images.unsplash.com/photo-1603362305258-3b4ea8bee447?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
              alt=""
              className="w-[300px] rounded-full mx-auto h-[300px]"
            />
          </div>
          <div className="p-4  shadow-xl rounded-xl bg-[#E4D0D0]  shadow-[#66347F]">
            <img
              src="https://i.pinimg.com/originals/8b/b5/72/8bb572d13e90e3a57de4c183a146d311.jpg"
              alt=""
              className="w-[300px] mx-auto rounded-full h-[300px]"
            />
          </div>
          <div className="p-4 shadow-xl   rounded-xl bg-[#E4D0D0]   shadow-[#66347F]">
            <img
              src="https://static.wixstatic.com/media/175410_f4be824886c74db8a06911fc267fc57c~mv2.webp/v1/fill/w_1000,h_1000,al_c/175410_f4be824886c74db8a06911fc267fc57c~mv2.webp"
              alt=""
              className="w-[300px] rounded-full mx-auto h-[300px]"
            />
          </div>
          <div className="p-4 shadow-xl  rounded-xl bg-[#E4D0D0]  shadow-[#66347F]">
            <img
              src="https://m.media-amazon.com/images/I/810GK68cbYL._SY550_.jpg"
              alt=""
              className="w-[300px] rounded-full mx-auto h-[300px]"
            />
          </div>
        </div>
      </div>
      <ShopBy></ShopBy>
    </div>
  );
};

export default Home;
