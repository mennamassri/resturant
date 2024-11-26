import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import MenuComponent from "../../components/Categories/Categories";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import "../../App.css";

function DishesPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const urls = [
    "/data/burgers.json",
    "/data/desserts.json",
    "/data/pizzas.json",
    "/data/sandwiches.json",
    "/data/best-foods.json",
  ];

  useEffect(() => {
    const fetchDish = async () => {
      try {
        setLoading(true);
        setError(null);

        const allData = await Promise.all(
          urls.map((url) => fetch(url).then((res) => res.json()))
        );

        const foundDish = allData.flat().find((d) => d.id === id);
        setDish(foundDish);
      } catch (error) {
        console.error("Error fetching dish details:", error);
        setError("Error loading dish details.");
      } finally {
        setLoading(false);
      }
    };

    fetchDish();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addItem(dish));
    Swal.fire({
      icon: "success",
      title: "Item added to cart successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleOrderNow = () => {
    dispatch(addItem(dish));
  };

  if (loading) {
    return (
      <motion.div
        className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
          <Skeleton className="w-full lg:w-1/2 h-72 object-cover rounded-lg" />
          <div className="w-full lg:w-1/2">
            <Skeleton height={40} className="mb-4" />
            <Skeleton height={20} count={3} className="mb-4" />
            <Skeleton height={30} width={100} className="mb-2" />
            <Skeleton height={20} width={200} className="mb-6" />
            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
              <Skeleton height={50} width={120} />
              <Skeleton height={50} width={120} />
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.p
        className="text-center text-lg text-red-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {error}
      </motion.p>
    );
  }

  if (!dish) {
    return (
      <motion.p
        className="text-center text-lg font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Dish not found.
      </motion.p>
    );
  }

  return (
    <>
      <motion.div
        className="mx-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
          <motion.img
            src={dish.img}
            alt={dish.name}
            className="w-full lg:w-1/3 h-full object-cover rounded-lg shadow-md mb-6 lg:mb-0"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          <div className="w-full lg:w-1/2">
            <motion.h1
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {dish.name}
            </motion.h1>
            <p className="text-lg text-gray-700 mb-4">{dish.dsc}</p>
            <p className="text-2xl font-semibold text-gray-900 mb-2">
              Price: ${dish.price}
            </p>
            <p className="text-lg text-gray-500">Rating: {dish.rate} ⭐</p>
            <p className="text-lg text-gray-500 mt-2">{dish.dsc}</p>
            <p className="text-lg text-gray-500 mb-6">
              Location: {dish.country}
            </p>

            <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
              <Link to={"/checkout"}>
                <button
                  onClick={handleOrderNow}
                  className="w-full lg:w-auto px-6 py-3 bg-orange hover:bg-orange-600  text-white font-semibold rounded-md shadow-md transition duration-300"
                >
                  Order Now
                </button>
              </Link>
              <button
                onClick={handleAddToCart}
                className="w-full lg:w-auto px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md shadow-md transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      <MenuComponent />
    </>
  );
}

export default DishesPage;
