import React from 'react';
import { motion } from 'framer-motion';
import teamImage from '../../img/cheff.png'; 
function AboutUs() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <div className="bg-gradient-to-r from-orange-100 via-white to-orange-100 py-16">
      <motion.div
        className="container mx-auto px-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
      
        <motion.h1
          className="text-4xl font-extrabold text-center mb-12 text-gray-800"
          variants={fadeInUp}
        >
          About <span className="text-orange-600">Us</span>
        </motion.h1>

 
        <motion.div className="text-center mb-12" variants={fadeInUp}>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to Aahaaram Restaurant – where exquisite flavors and unforgettable moments come together in perfect harmony.
          </p>
        </motion.div>

        
        <div className="flex flex-col lg:flex-row items-center gap-12">
      
          <motion.div
            className="lg:w-1/2 text-gray-700 space-y-6"
            variants={fadeInLeft}
          >
            <h3 className="text-2xl font-semibold text-orange-600">
              Our Philosophy
            </h3>
            <p className="text-lg leading-relaxed">
              At Aahaaram, we craft every dish with passion and precision. Using only the freshest ingredients, we create a dining experience that delights the senses and nourishes the soul.
            </p>
          </motion.div>

        
          <motion.div
            className="lg:w-1/4 flex justify-center"
            variants={fadeInRight}
          >
            <img
              src={teamImage}
              alt="Our Team"
              className="rounded-lg  hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>

     
        <motion.div
          className="text-center mt-16"
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold text-orange-600 mb-6">
            Our History
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Established in 2020, Aahaaram Restaurant has consistently delivered exceptional culinary experiences. With a focus on innovation and customer satisfaction, we have become a trusted name in the world of fine dining.
          </p>
        </motion.div>

    
        <motion.div
          className="mt-12 border-t-2 border-orange-200 w-2/3 mx-auto"
          variants={fadeInUp}
        ></motion.div>
      </motion.div>
    </div>
  );
}

export default AboutUs;
