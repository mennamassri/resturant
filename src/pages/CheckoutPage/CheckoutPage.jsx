import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/slices/cartSlice";
import Swal from "sweetalert2";
import Skeleton from 'react-loading-skeleton';
import { motion } from "framer-motion";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {

    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrderSubmit = () => {
    Swal.fire({
      icon: "success",
      title: "Order placed successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-0">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col space-y-8"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
  
        <div className="p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>

          {loading ? (
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <Skeleton variant="rectangular" width={64} height={64} />
                  <Skeleton variant="text" width="60%" />
                </div>
              ))}
            </div>
          ) : cartItems && cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md"
                >
                  <div className="flex items-start space-x-4">
                    {item.img && (
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg shadow-md"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Unit Price: ${item.price.toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">
                        Total Price: ${item.totalPrice.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-1 mt-2">
                    <button
                      onClick={() => dispatch(addItem(item))}
                      className="px-2 py-1 bg-green-500 hover:bg-green-600 text-white font-bold rounded"
                    >
                      +
                    </button>
                    <span className="text-lg font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(removeItem(item.id))}
                      className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white font-bold rounded"
                    >
                      -
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-gray-500">Your cart is empty.</p>
          )}
        </div>

       
        <motion.div
          className="p-8 bg-white shadow-lg rounded-lg"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <h2 className="text-xl font-bold text-gray-700 mb-4">Shipping Details</h2>
          <div className="space-y-4">
            {loading ? (
              <Skeleton variant="text" width="100%" height={40} />
            ) : (
              <>
                <input
                  type="text"
                  name="name"
                  value={shippingDetails.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  name="address"
                  value={shippingDetails.address}
                  onChange={handleInputChange}
                  placeholder="Shipping Address"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  name="phone"
                  value={shippingDetails.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </>
            )}
          </div>
        </motion.div>

        
        <motion.div
          className="p-8 bg-white shadow-lg rounded-lg"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <h2 className="text-xl font-bold text-gray-700 mb-4">Payment Method</h2>
          <div className="space-y-4">
            {["Credit Card", "PayPal", "Cash on Delivery"].map((method) => (
              <label key={method} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="form-radio text-orange-500"
                />
                <span>{method}</span>
              </label>
            ))}
          </div>

        </motion.div>
 <motion.div>
 <div className="p-8 bg-white shadow-lg rounded-lg">
        <p className="flex justify-between text-lg text-gray-700">
  <span>Subtotal:</span>
  <span>${totalAmount.toFixed(2)}</span>
</p>
<p className="flex justify-between text-lg text-gray-700">
  <span>Shipping:</span>
  <span>$5.00</span> 
</p>
<p className="flex justify-between text-lg text-gray-700">
  <span>Taxes (10%):</span>
  <span>${(totalAmount * 0.1).toFixed(2)}</span>
</p>
<p className="flex justify-between text-lg font-bold text-gray-800">
  <span>Total:</span>
  <span>${(totalAmount + 5 + totalAmount * 0.1).toFixed(2)}</span>
</p>
</div>
 </motion.div>

      
        <motion.div
          className="p-8 bg-white shadow-lg rounded-lg"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <button
            onClick={handleOrderSubmit}
            className="w-full px-6 py-3 bg-orange hover:bg-orange-600 text-white font-semibold rounded-md shadow-md transition duration-300"
          >
            Confirm Order
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Checkout;
