import React, { useState, useEffect } from "react";
import {
  GiHamburger,
  GiCakeSlice,
  GiPizzaSlice,
  GiSandwich,
  GiChickenOven,
} from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import "../../App.css";

const getIconByName = (name) => {
  switch (name) {
    case "burgers":
      return <GiHamburger />;
    case "desserts":
      return <GiCakeSlice />;
    case "pizzas":
      return <GiPizzaSlice />;
    case "sandwiches":
      return <GiSandwich />;
    case "best-foods":
      return <GiChickenOven />;
    case "menu":
      return <MdOutlineRestaurantMenu />;
    default:
      return null;
  }
};

export default function MenuComponent() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  const urls = [
    "/data/burgers.json",
    "/data/desserts.json",
    "/data/pizzas.json",
    "/data/sandwiches.json",
  ];

  const fetchMenuItems = (event = null, url = null) => {
    if (event) event.preventDefault();

    if (activeButton === url && url !== null) {
      setMenuItems([]);
      setActiveButton(null);
      return;
    }

    setLoading(true);
    setError(null);
    setMenuItems([]);
    setActiveButton(url);

    if (url === null) {
      Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
        .then((data) => {
          const combinedMenu = data.flat();
          setMenuItems(combinedMenu);
        })
        .catch(() => setError("Error loading menu items"))
        .finally(() => setLoading(false));
    } else {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setMenuItems(data))
        .catch(() => setError("Error loading menu items"))
        .finally(() => setLoading(false));
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  return (
    <div className="menu-container mb-10">
      <div className="button-group flex flex-wrap justify-center gap-4 pb-3 mt-10 ">
        {[
          { url: null, name: "menu" },
          ...urls.map((url) => ({
            url,
            name: url.split("/")[2].split(".")[0],
          })),
        ].map((item) => {
          const { url, name } = item;
          const isActive = activeButton === url;

          return (
            <button
              key={name}
              onClick={(e) => fetchMenuItems(e, url)}
              className={`p-4 rounded-lg flex flex-col items-center gap-2 transform transition duration-300 group ${
                isActive
                  ? "bg-red-700 text-white"
                  : "bg-red-500 text-white hover:bg-white hover:text-red-500"
              }`}
              name={name}
            >
              <div
                className={`rounded-full p-2 w-10 h-10 flex items-center justify-center transition duration-300 ${
                  isActive
                    ? "bg-red-500 text-white"
                    : "bg-white text-red-500 group-hover:bg-red-500 group-hover:text-white"
                }`}
              >
                {getIconByName(name)}
              </div>
              <span
                className={`transition duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-white group-hover:text-red-500"
                }`}
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </span>
            </button>
          );
        })}
      </div>

      {loading && (
        <div className="menu-list mt-4 flex flex-wrap gap-8 justify-center">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg w-72 text-center relative zoom"
            >
              <Skeleton height={80} width={80} />
              <Skeleton height={20} className="mt-4" />
              <Skeleton height={15} className="mt-2" />
            </div>
          ))}
        </div>
      )}

      {error && <p>{error}</p>}

      {menuItems.length > 0 && !loading && (
        <div className="menu-list mt-4 flex flex-wrap gap-8 justify-center fade-in">

          {menuItems.map((item) => (
            <Link
              to={`/dish/${item.id}`}
              key={item.id}
              className="no-underline"
            >
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-72 text-center relative zoom">
                <div className="flex flex-col justify-center">
                  <img
                    src={item.img}
                    alt={item.name}
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
                      {item.name.substring(0, 20)}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2">
                      {item.dsc.substring(0, 27)}...
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
