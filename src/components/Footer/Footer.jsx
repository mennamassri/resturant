import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "../../img/chef1.png";
import "../../App.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-gray-100 text-gray-800 py-6 rounded">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-start gap-8 text-sm md:text-base">
            <div className="w-full md:w-auto flex flex-col items-center md:items-start text-center md:text-left">
              <img
                src={Logo}
                alt="Logo"
                className="w-14 h-14 object-contain mb-3"
              />
              <h2 className="text-lg font-bold">Aahaaram Restaurant</h2>
              <p className="text-gray-600 mt-2">
                Bringing you the best flavors with a touch of love!
              </p>
            </div>

            <div className="flex flex-wrap gap-8 justify-between w-full md:w-auto">
              <div>
                <h4 className="font-semibold mb-2 ">Explore</h4>
                <ul className="space-y-1">
                  <li>
                    <Link to={'/'}  className="rounded-md px-2 py-1 transition ">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to={'/menu'} href="#" className="  rounded-md px-2 py-1 transition ">
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link to={'/aboutus'} className="  rounded-md px-2 py-1 transition">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to={'/contactus'} className="  rounded-md px-2 py-1 transition">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Support</h4>
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="rounded-md px-2 py-1 transition">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="rounded-md px-2 py-1 transition">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="rounded-md px-2 py-1 transition">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-auto text-center md:text-left">
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href="#"
                  className="p-2 bg-gray-200 rounded-full bg-orange text-white zoom transition"
                >
                  <FaFacebookF size={16} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-200 rounded-full bg-orange text-white zoom transition"
                >
                  <FaTwitter size={16} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-200 rounded-full bg-orange text-white zoom transition"
                >
                  <FaInstagram size={16} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-200 rounded-full bg-orange text-white  zoom transition "
                >
                  <FaYoutube size={16} />
                </a>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-300" />

          <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
            <p>© 2024 Aahaaram Restaurant. All rights reserved.</p>
            <div className="text-center mt-4 md:mt-0">
              <a href="#" className="footer-links-500 transition">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="#" className="footer-links-500 transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
