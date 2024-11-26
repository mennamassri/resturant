import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Logo from "../../img/chef1.png";
import "../../App.css";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const password = watch("password");

  const onSubmit = (data) => {
    Swal.fire({
      title: "Success!",
      text: "We have sent an email to confirm your account. Please check your inbox.",
      icon: "success",
      confirmButtonText: "Go to Login",
    }).then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="min-h-screen flex items-center bg-gradient-to-r from-red-100 via-yellow-100 to-red-100">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto items-center">
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <img
            src={Logo}
            alt="Restaurant Decoration"
            className="w-full md:w-3/4 lg:w-2/3 max-w-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="flex-1 p-4 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold orange mb-6 text-center">
            Create Account
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                {...register("username", { required: "Username is required" })}
                className="w-full p-3 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-red-300"
                placeholder="Enter your username"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

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
                {...register("password", {
                  required: "Password is required",
                  validate: {
                    hasNumber: (value) =>
                      /\d/.test(value) ||
                      "Password must include at least one number",
                    hasUpperCase: (value) =>
                      /[A-Z]/.test(value) ||
                      "Password must include at least one uppercase letter",
                    hasLowerCase: (value) =>
                      /[a-z]/.test(value) ||
                      "Password must include at least one lowercase letter",
                    minLength: (value) =>
                      value.length >= 8 ||
                      "Password must be at least 8 characters long",
                  },
                })}
                className="w-full p-3 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-red-300"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className="w-full p-3 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-red-300"
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-orange text-white font-semibold rounded mt-4 form-button transition duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
