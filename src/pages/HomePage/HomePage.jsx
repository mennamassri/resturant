import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-loading-skeleton/dist/skeleton.css";
import "../../App.css";
import img1 from "../../img/f5.png";
import img2 from "../../img/fi3.png";
import img3 from "../../img/i1.png";
import img4 from "../../img/ar1.png";
import img5 from "../../img/c3.png";
import MenuComponent from "../../components/Categories/Categories";

export default function HomePage() {
  const [bestDishes, setBestDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBestDishes = async () => {
      try {
        const response = await fetch("/data/best-foods.json");
        const data = await response.json();
        setBestDishes(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchBestDishes();
  }, []);

  // Variants for animation
  const containerVariant = {
    hidden: { opacity: 0, x: "-100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, delay: 0.2 },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, x: "-50vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, delay: 0.4 },
    },
  };

  const sliderVariant = {
    hidden: { opacity: 0, x: "50vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, delay: 0.6 },
    },
  };

  return (
    <>
      {/* Section 1 */}
      <motion.section
        className="flex flex-col md:flex-row justify-between py-12 px-6"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex flex-col mb-10 md:mb-0"
          variants={textVariant}
        >
          <div className="max-w-5xl mb-9">
            <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-left">
              The Fastest Food Delivery in{" "}
              <span className="orange">South India</span>
            </h1>
            <p className="text-gray-600 mt-4 text-left">
              Indulge in the Flavors of the South, Delivered at Lightning Speed!
              Experience Aahaaram - Your Fastest Route to Authentic South Indian
              Delicacies
            </p>
          </div>

          <Link to={"/menu"}>
            <button className="order button-custom bg-orange text-white px-6 py-3 rounded-lg font-semibold mt-4 w-40">
              Order Now
            </button>
          </Link>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          variants={textVariant}
        >
          <div className="card bg-gray-100 p-6 rounded-lg shadow-md w-80 text-center relative zoom">
              <img
                src={img1}
                alt="Food Item"
                style={{
                  width: "10rem",
                  position: "absolute",
                  top: "-3rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
              <h3 className="mt-4 font-semibold">Biriyani</h3>
              <p className="text-gray-500 mt-1">Puttu Kadail Curry</p>
              <p className="text-orange-600 font-bold mt-2">₹ 240</p>
            </div>
            <div className="card bg-gray-100 p-6 rounded-lg shadow-md w-60 text-center relative zoom">
              <img
                src={img5}
                alt="Food Item"
                style={{
                  width: "8rem",
                  position: "absolute",
                  top: "-2.9rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
              <h3 className="mt-4 font-semibold">Puttu Kadail Curry</h3>
              <p className="text-gray-500 mt-1">Puttu Kadail Curry</p>
              <p className="text-orange-600 font-bold mt-2">₹ 240</p>
            </div>
            <div className="card bg-gray-100 p-6 rounded-lg shadow-md w-48 text-center relative zoom">
              <img
                src={img2}
                alt="Food Item"
                style={{
                  width: "9rem",
                  position: "absolute",
                  top: "-3rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
              <h3 className="mt-10 font-semibold">Mysore Dosa</h3>
              <p className="text-gray-500 mt-1">Puttu Kadail Curry</p>
              <p className="text-orange-600 font-bold mt-2">₹ 240</p>
            </div>

            <div className="card bg-gray-100 p-6  rounded-lg shadow-md w-48 text-center relative zoom">
              <img
                src={img3}
                alt="Food Item"
                style={{
                  width: "10rem",
                  position: "absolute",
                  top: "-3rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
              <h3 className="mt-10 font-semibold">Sambar Vadai</h3>
              <p className="text-gray-500 mt-1">Puttu Kadail Curry</p>
              <p className="text-orange-600 font-bold mt-2">₹ 240</p>
            </div>
            <div className="card bg-gray-100 p-6 rounded-lg shadow-md w-48 text-center relative zoom">
              <img
                src={img4}
                alt="Food Item"
                style={{
                  width: "10rem",
                  position: "absolute",
                  top: "-1.5rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
              <h3 className="mt-10 font-semibold">Momos</h3>
              <p className="text-gray-500 mt-1">Testy Momos!!</p>
              <p className="text-orange-600 font-bold mt-2">₹ 240</p>
            </div>
         
        </motion.div>
      </motion.section>

      <motion.section
        className="py-10 px-6"
        variants={sliderVariant}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-center md:text-left">
          Our Best Dishes
        </h2>

        <div className="flex justify-center w-full max-w-6xl mx-auto">
          <div className="w-full max-w-6xl">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {loading
                ? Array(4)
                    .fill()
                    .map((_, index) => (
                      <SwiperSlide key={index}>
                        <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-60 mx-auto text-center justify-center relative zoom">
                          <Skeleton
                            height={120}
                            width={128}
                            className="mx-auto rounded-lg"
                          />
                          <h3 className="text-lg font-semibold mt-4">
                            <Skeleton width={100} />
                          </h3>
                          <p className="text-gray-500 text-sm mt-2">
                            <Skeleton width={80} />
                          </p>
                        </div>
                      </SwiperSlide>
                    ))
                : bestDishes.map((dish) => (
                    <SwiperSlide key={dish.id}>
                      <Link to={`/dish/${dish.id}`}>
                        <div className="bg-gray-100 p-4 rounded-lg shadow-lg w-60 mx-auto text-center justify-center relative zoom">
                          <div className="flex flex-col justify-center">
                            <img
                              src={dish.img}
                              alt={dish.name}
                              style={{
                                width: "8rem",
                                height: "8rem",
                                marginLeft: "auto",
                                marginRight: "auto",
                                borderRadius: "10px",
                                objectFit: "cover",
                              }}
                            />
                            <div>
                              <h3 className="text-lg font-semibold">
                                {dish.name.substring(0, 20)}
                              </h3>
                              <p className="text-gray-500 text-sm mt-2">
                                {dish.dsc.substring(0, 23)}...
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
            </Swiper>
          </div>
        </div>

        <MenuComponent />
      </motion.section>
    </>
  );
}
