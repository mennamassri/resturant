
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext.jsx";
import { IoBag } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import Logo from "./../../img/chef1.png";
import Avater from "../../img/avatar.png";

export default function Header() {
  const { user, logoutUser } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        logoutUser();
        Swal.fire(
          "Logged out!",
          "You have been logged out successfully.",
          "success"
        );
      }
    });
  };
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav
        className="mx-auto flex items-center justify-between p-4 lg:p-6 backdrop-blur-md"
        aria-label="Global"
      >
        <div className="flex flex-1 zoom">
          <Link to={"/"} className="flex items-center -m-1.5 p-1.5">
            <img className="h-10 w-auto" src={Logo} alt="Company Logo" />
            <span className="text-lg lg:text-xl font-bold p-1">
              Aahaaram Restaurant
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          <Link
            to={"/"}
            className="text-sm lg:text-md font-semibold text-gray-900 zoom"
          >
            Home
          </Link>
          <Link
            to={"/menu"}
            className="text-sm lg:text-md font-semibold text-gray-900 zoom"
          >
            Menu
          </Link>
          <Link to={'/services'}
            href="#"
            className="text-sm lg:text-md font-semibold text-gray-900 zoom"
          >
            Services
          </Link>
          <Link to={'/aboutus'}
            href="#"
            className="text-sm lg:text-md font-semibold text-gray-900 zoom"
          >
            About us
          </Link>
          <Link to={'/contactus'}
            href="#"
            className="text-sm lg:text-md font-semibold text-gray-900 zoom"
          >
            Contact us
          </Link>
          <Link
            to={"/cart"}
            className="relative text-xl lg:text-2xl font-semibold text-gray-900 zoom"
          >
            <IoBag />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-6 relative">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 text-sm font-semibold text-gray-900 border border-gray-300 px-3 py-2 rounded-md hover:border-gray-400"
              >
                <img
                  src={Avater}
                  alt="User Avatar"
                  className="h-9 w-9 rounded-full"
                />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-md rounded-md">
                  <Link
                    to={"/profile"}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to={"/login"}
              className="flex items-center gap-2 text-sm font-semibold text-gray-900 border border-gray-300 px-3 py-2 rounded-md hover:border-gray-400"
            >
              <FiLogIn className="h-4 w-5" aria-hidden="true" /> Log in
            </Link>
          )}
        </div>
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-900"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 backdrop-blur-md overflow-hidden flex justify-end">
          <div className="w-4/5 bg-white overflow-y-auto">
            <div className="flex items-center justify-between p-6">
              <Link to={"/"} className="flex items-center -m-1.5 p-1.5">
                <img className="h-10 w-auto" src={Logo} alt="Company Logo" />
                <span className="text-lg font-bold p-1">
                  Aahaaram Restaurant
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-2.5 text-gray-700"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 space-y-4 px-6">
              <Link
                to={"/"}
                className="block text-base font-semibold text-gray-900 rounded-md px-3 py-2"
              >
                Home
              </Link>
              <Link
                to={"/menu"}
                className="block text-base font-semibold text-gray-900 rounded-md px-3 py-2"
              >
                Menu
              </Link>
              <Link to={'/services'}
                href="#"
                className="block text-base font-semibold text-gray-900 rounded-md px-3 py-2"
              >
                Services
              </Link>
              <Link to={'/aboutus'}
                href="#"
                className="block text-base font-semibold text-gray-900 rounded-md px-3 py-2"
              >
                About us
              </Link>
              <Link to={'/contactus'}
                href="#"
                className="block text-base font-semibold text-gray-900 rounded-md px-3 py-2"
              >
                Contact us
              </Link>
              <div className="relative -right-4"> <Link
                to={"/cart"}
                className=" text-2xl lg:text-3xl font-semibold text-gray-900"
              >
                <IoBag />
                {totalQuantity > 0 && (
                  <span className="relative -top-7 -right-3 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    {totalQuantity}
                  </span>
                )}
              </Link></div>
              {user ? (
                <div className="flex items-center gap-3">
                  <img
                    src={Avater}
                    alt="User Avatar"
                    className="h-8 w-8 rounded-full"
                  />
                  <button
                    onClick={logoutUser}
                    className="text-sm font-semibold text-gray-900"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to={"/login"}
                  className="block text-base font-semibold text-gray-900 rounded-md px-3 py-2 flex items-center"
                >
                  <FiLogIn className="mr-2" /> Log in
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
