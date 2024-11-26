import React from "react";
import { motion } from "framer-motion"; 
import Delivery from '../../img/delivery.png';
import PrivateEvents from '../../img/Private Events.svg';
import Reserved from '../../img/reserved.png';
import "../../App.css";

function Services() {

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8 }, 
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }, 
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Services</h1>
      
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
       
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            variants={cardVariant}
          >
            <img
              src={Delivery}
              alt="Food Delivery"
              className="w-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-orange-600 mb-4">Food Delivery</h3>
            <p className="text-gray-700">
              Enjoy quick and reliable food delivery right to your doorstep, ensuring your meals are always fresh and delicious.
            </p>
          </motion.div>

         
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            variants={cardVariant}
          >
            <img
              src={Reserved}
              alt="Table Reservation"
              className="w-22 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-orange-600 mb-4">Table Reservation</h3>
            <p className="text-gray-700">
              Reserve your table easily online and secure the best seating for your dining experience.
            </p>
          </motion.div>

          
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            variants={cardVariant}
          >
            <img
              src={PrivateEvents}
              alt="Private Events"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-orange-600 mb-4">Private Events</h3>
            <p className="text-gray-700">
              Host your special events, like birthdays or weddings, in our unique spaces tailored to make your day unforgettable.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
