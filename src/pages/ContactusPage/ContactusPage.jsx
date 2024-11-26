import React, { useState } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Swal from "sweetalert2";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "../../img/chef1.png";

function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Your message sent successfully!",
      showConfirmButton: false,
      timer: 1800,
    });
  };

  return (
    <motion.div
      className="bg-gradient-to-r from-orange-100 via-white to-orange-100 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6">
        <motion.h1
          className="text-4xl font-extrabold text-gray-800 text-center mb-12"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact <span className="text-orange-600">Us</span>
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Form Section */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-orange-600 mb-6">
              Contact Form
            </h3>
            {loading ? (
              <Skeleton height={40} count={4} className="mb-4" />
            ) : (
              <form onSubmit={handleSubmit}>
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mb-6 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mb-6 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mb-6 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  rows="4"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.button
                  type="submit"
                  className="w-full form-button text-white py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {loading ? (
              <Skeleton circle={true} height={100} width={100} />
            ) : (
              <motion.img
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                src={Logo}
                alt="Chef Logo"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, loop: Infinity }}
              />
            )}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-2xl font-semibold text-orange-600 mb-6">
                Contact Details
              </h3>
              {loading ? (
                <Skeleton height={20} count={4} className="mb-4" />
              ) : (
                <div className="space-y-4 text-gray-700">
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-orange-600" /> Address: Hope
                    Street, South India
                  </p>
                  <p className="flex items-center gap-2">
                    <FaPhoneAlt className="text-orange-600" /> Phone: +970 123
                    456 789
                  </p>
                  <p className="flex items-center gap-2">
                    <FaEnvelope className="text-orange-600" /> Email:
                    info@aahaaram.com
                  </p>
                </div>
              )}
              <div className="mt-8">
                <h4 className="text-lg text-gray-800 font-semibold">
                  Follow Us:
                </h4>
                <div className="flex gap-4 mt-4">
                  {["FacebookF", "Twitter", "Instagram"].map((icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="p-3 bg-gray-100 rounded-full bg-orange text-white shadow-md hover:shadow-lg transition duration-300"
                      whileHover={{ scale: 1.2 }}
                    >
                      {icon === "FacebookF" ? (
                        <FaFacebookF />
                      ) : icon === "Twitter" ? (
                        <FaTwitter />
                      ) : (
                        <FaInstagram />
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ContactUs;
