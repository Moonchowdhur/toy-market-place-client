import React, { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import swal from "sweetalert";
import { Authcontext } from "../provider/Authprovider";

const Register = () => {
  const { createUser } = useContext(Authcontext);
  const [accepted, setAccepted] = useState(false);
  const [eye, setEye] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleRegisterbtn = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photo = event.target.photo.value;

    setError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        setSuccess("Registration Successfull");

        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            //
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
            setSuccess("");
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setSuccess("");
      });
  };

  const handleChecked = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div className="md:flex mb-20 md:mt-8 mt-36 gap-10 items-center justify-center my-7">
      <div>
        <img
          src="https://i.ibb.co/g7hPW4h/Mobile-login-pana.png"
          className="w-[500px]"
          alt=""
        />
      </div>
      <div className="w-96 p-6 shadow-md bg-white rounded">
        <div className="text-center mb-3 font-bold text-3xl justify-center gap-3 flex items-center">
          <FaUser className="text-fuchsia-700" />
          <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-3xl font-black">
            Create an account
          </h1>
        </div>

        <hr className="mt-3" />
        <form onSubmit={handleRegisterbtn}>
          <div>
            {error && <p className="text-center mt-4 text-red-500">{error}</p>}
          </div>
          <div>
            {success && (
              <p className="text-center mt-4 text-xl text-green-500">
                {success}
              </p>
            )}
          </div>

          <div className="mt-3">
            <label htmlFor="username" className="block text-base mb-2">
              Username
            </label>
            <input
              type="text"
              required
              name="name"
              id="name"
              placeholder="Enter Username"
              className="border w-full px-2 focus:outline-none text-base py-1 focus:ring-0 focus:border-gray-600 rounded"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="photo" className="block text-base mb-2">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter Photo URL"
              className="border w-full px-2 focus:outline-none text-base py-1 focus:ring-0 focus:border-gray-600 rounded"
              required
            />
          </div>
          <div className="mt-3">
            <label htmlFor="email" className="block text-base mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              className="border w-full px-2 focus:outline-none text-base py-1 focus:ring-0 focus:border-gray-600 rounded"
              required
            />
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="block text-base mb-2">
              Password
            </label>
            <div className="flex items-center">
              <input
                type={eye ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter Password"
                className="border w-full px-2 focus:outline-none text-base py-1 focus:ring-0 focus:border-gray-600 rounded"
                required
              />
              <span onClick={() => setEye(!eye)}>
                {eye ? (
                  <AiFillEye className="text-4xl border focus:outline-none focus:ring-0 focus:border-gray-600 rounded " />
                ) : (
                  <AiFillEyeInvisible className="text-4xl border focus:outline-none focus:ring-0 focus:border-gray-600  rounded " />
                )}
              </span>
            </div>
          </div>

          <div className="mt-3 ">
            <label className="label cursor-pointer">
              <input
                onClick={handleChecked}
                type="checkbox"
                className="checkbox"
              />
              <span className="label-text text-indigo-700 underline">
                <>I accept the Terms and Conditions</>
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="mt-5 disabled:bg-gray-200 disabled:text-black font-semibold text-xl border-2 w-full px-3 py-2 rounded-lg border-fuchsia-900 bg-fuchsia-900 hover:bg-transparent hover:text-fuchsia-900 text-white "
          >
            Create an account
          </button>
        </form>
        <button className="mt-3">
          <small>
            Already have an account?
            <span className="text-indigo-700 font-semibold underline ms-2">
              <Link to="/login">login here</Link>
            </span>
          </small>
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
