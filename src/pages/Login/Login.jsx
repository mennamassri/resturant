import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext.jsx";
import Logo from "../../img/chef1.png";
import "../../App.css";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loginUser } = useUser();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const userData = { name: "John Doe", avatar: "path_to_avatar_image" };
    loginUser(userData);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-r from-red-100 via-yellow-100 to-red-100">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto items-center ">
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <img
            src={Logo}
            alt="Restaurant Logo"
            className="w-full md:w-3/4 lg:w-2/3 max-w-2xl  transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex-1 p-4 md:p-8 ">
          <h2 className="text-3xl md:text-4xl font-bold orange mb-6 text-center">
            Welcome Back!
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full p-3 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-red-300"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className="w-full p-3 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-red-300"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-orange text-white font-semibold rounded mt-4 form-button transition duration-300"
            >
              Log In
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="orange hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
