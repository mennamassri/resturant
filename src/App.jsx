
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { UserProvider } from './context/UserContext.jsx';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import DishPage from './pages/DishPage/DishPage';
import MenuPage from './pages/MenuPage/MenuPage';
import CartPage from './pages/Cart/Cart';
import LoginPage from './pages/Login/Login';
import SignUpPage from './pages/Login/SignupPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.jsx';
import ServicesPage from './pages/ServicesPage/ServicesPage.jsx';
import AboutUsPage from './pages/AboutPage/AboutPage.jsx';
import ContactUsPage from './pages/ContactusPage/ContactusPage.jsx';
import Footer from './components/Footer/Footer.jsx';

import './App.css';

function AppContent() {
  const location = useLocation();
  const hideHeaderRoutes = ['/login', '/signup'];
  const shouldShowHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dish/:id" element={<DishPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
      </Routes>
<Footer/>
    </>
  );
}

function App() {
  return (
    <Router>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </Router>
  );
}

export default App;
