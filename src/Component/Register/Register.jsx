import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import { AuthContext } from "../Context/UserContext";
import { Player } from "@lottiefiles/react-lottie-player";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [photo, setPhoto] = useState("");
  const { createUser, userProfile, user, logOut, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    // Check for email and password errors before submitting the form
    if (emailError) {
      e.target.email.focus();
      return;
    } else if (passwordError) {
      e.target.password.focus();
      return;
    }
    // Update user profile with name and photo
    userProfile(name, photo)
      .then(() => {
        console.log(name);
        setErrorMessage("");
      })
      .catch((error) => {
        toast.setErrorMessage(error.message);
      });
    // Create a new user with email and password
    createUser(email, password)
      .then((result) => {
        setErrorMessage("");
        const loggedUser = result.user;
        setUser(loggedUser);
        form.reset();
        logOut();
        // Display success message using toast
        toast.success("Successfully Registered!");
      })
      .catch((error) => {
        // Display error message using toast
        console.error(error);
        toast.error(error.message);
      });

    !errorMessage || navigate("/login");
  };
  const handleEmail = (e) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const input = e.target.value;
    setEmail(input);
    if (!emailRegex.test(input)) {
      toast.setEmailError("Please provide a valid email");
    } else {
      toast.setEmailError("");
    }
  };
  const handlePassword = (e) => {
    const input = e.target.value;
    setPassword(input);
    if (input.length < 6) {
      setPasswordError("Give less than 6 characters ");
    } else if (!/\d/.test(input)) {
      setPasswordError("Give at least one digit");
    } else if (!/[a-z]/.test(input)) {
      setPasswordError("Give at least one lowercase letter");
    } else if (!/[A-Z]/.test(input)) {
      setPasswordError("Give at least one uppercase letter");
    } else {
      setPasswordError("");
    }
  };
  return (
    <div className="font-poppins my-5 ">
      <section className=" w-[100%] min-h-screen flex items-center justify-center">
        {/* login container */}
        <div className="bg-gray-300  flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          {/* form */}
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl items-center text-[#03045e] flex">
              Register{" "}
              <Player
                autoplay
                speed={1.5}
                loop
                src="/112454-form-registration.json"
                className="rounded-full w-16 h-16  "
              ></Player>
            </h2>
            <p className="text-xs mt-4 text-[#002D74]">
              If you are not a member, easily register in
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="p-2  rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
              />
              {emailError && <span className="text-red-500">{emailError}</span>}
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  name="photoURL"
                  type="text"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  placeholder="Photo URL"
                />
              </div>
              {passwordError && (
                <span className="text-red-500">{passwordError}</span>
              )}
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  name="password"
                  placeholder="Password"
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={handlePassword}
                />

                <svg
                  onClick={() => setShow(!show)}
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="gray"
                  className="bi bi-eye absolute top-1/2 right-6 transform -translate-y-1/2"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>
              <p className="text-danger">
                {errorMessage && (
                  <span className="text-red-500">{errorMessage}</span>
                )}
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </p>

              <button
                type="submit"
                class="text-black w-[100%] bg-gradient-to-r from-[#c09da9] via-pink-100 to-[#c09da9] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#774d62] dark:focus:ring-pink-800 shadow-lg shadow-[#774d62] dark:shadow-lg dark:shadow-pink-800/80 font-medium  text-sm px-5  text-center mr-2 mb-2 rounded-xl  py-2 hover:scale-105 duration-300"
              >
                Register
              </button>
            </form>
            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>

            <div className="mt-5 text-center"></div>
            <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
              <Link>Forgot your password?/</Link>
            </div>
            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Don't have an account?</p>
              <button className="py-2 px-5 bg-white text-rose-900 border rounded-xl hover:scale-110 duration-300">
                <Link to="/login">Login</Link>
              </button>
            </div>
          </div>
          {/* image */}
          <div className="md:block hidden w-1/2">
            <img
              alt="food"
              src="https://i.pinimg.com/564x/4c/52/c5/4c52c513906e9aac6b3edeab3f0f692b.jpg"
              className="object-fit h-auto w-auto rounded-md xl:col-span-3 bg-gray-900 opacity-70"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
