import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../redux/slices/cartSlice';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import '../../App.css';
import { Link } from 'react-router-dom';
import EmptyCart from '../../img/emptyCart.svg';

const Cart = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => state.cart.items);
  const isLoading = false; 

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
     
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-3/4 p-8 bg-white shadow-lg rounded-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Your Cart
          </h2>

          {isLoading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, index) => (
                <Skeleton key={index} height={100} borderRadius={10} />
              ))}
            </div>
          ) : cartItems && cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
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
                      <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
                      <p className="text-sm text-gray-500">Unit Price: ${item.price.toFixed(2)}</p>
                      <p className="text-sm text-gray-500">
                        Total Price: ${(item.totalPrice).toFixed(2)}
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
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={EmptyCart} alt="Empty Cart" />
            </motion.div>
          )}
        </motion.div>

    
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/4 p-8 bg-white shadow-lg rounded-lg"
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Order Summary</h2>
          {isLoading ? (
            <Skeleton height={150} borderRadius={10} />
          ) : (
            <div className="border-t border-gray-300 pt-4 space-y-2">
              <p className="flex justify-between text-lg text-gray-700">
                <span>Total Quantity:</span>
                <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
              </p>
              <p className="flex justify-between text-lg text-gray-700">
                <span>Total Amount:</span>
                <span>${totalAmount.toFixed(2)}</span>
              </p>
            </div>
          )}
          <Link to="/checkout">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 w-full px-6 py-3 form-button text-white font-semibold rounded-md shadow-md transition duration-300"
            >
              Checkout
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Cart;
