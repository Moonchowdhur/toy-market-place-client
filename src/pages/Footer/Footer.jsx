import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { AiFillPhone, AiOutlineMail, AiFillHome } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#4C4C6D] text-neutral-content">
      <footer className="footer md:px-14 p-10 ">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1612505995758-b795f2e5d6d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <span className="footer-title text-3xl font-bold">
              Dolls Haunter
            </span>
          </div>

          <p>This website is different kind of dolls.</p>
          <div className="flex text-3xl items-center gap-4 my-5">
            <BsFacebook className="text-blue-500" />
            <BsInstagram className="text-orange-600" />
            <BsTwitter className="text-blue-500" />
          </div>
        </div>

        <div>
          <span className="footer-title">Shop</span>
          <a className="link link-hover">Best Toys for Kids by Age</a>
          <a className="link link-hover">More Search</a>
          <a className="link link-hover">Top Kids Toys</a>
          <a className="link link-hover">Award Winning Toys</a>
        </div>
        <div>
          <span className="footer-title">Helpful Links</span>

          <a className="link link-hover">Join Our Team</a>
          <a className="link link-hover">Toy Safety Info</a>
          <a className="link link-hover">Terms & Conditons</a>
          <a className="link link-hover">Privacy Policy</a>
        </div>
        <div>
          <span className="footer-title">Contact Us</span>
          <div className="flex items-center gap-2">
            <AiFillPhone className="text-blue-500 text-3xl" />
            <p>+919836684123</p>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineMail className="text-red-500 text-3xl" />
            <p>dollshaunter12@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <AiFillHome className="text-blue-500 text-3xl" />
            <p>2,A.M BOSE ROAD, Kolkata-700028</p>
          </div>
        </div>
      </footer>
      <hr />
      <div className="flex  justify-around md:px-14 p-10 items-center py-5">
        <p>@2023 Dolls Haunter. All Rights Reserved</p>
        <p>Powered by Dolls Haunter</p>
      </div>
    </div>
  );
};

export default Footer;
