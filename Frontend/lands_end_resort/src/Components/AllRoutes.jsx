import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Menu from "../Pages/Menu";
import Dining from "../Pages/Dining";
import Cart from "../Pages/Cart";
import Deals from "../Pages/Deals";
import Specials from "../Pages/Specials";
import Events from "../Pages/Events";
import Payment from "../Pages/Payment";
import AdminSidebar from "./AdminSidebar";
import AdminSignup from "../Pages/AdminSignup";
import AdminLogin from "../Pages/AdminLogin";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dinings" element={<Dining />} />
        <Route path="/menus" element={<Menu />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/events" element={<Events />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/admin" element={<AdminSidebar />} />
        <Route path="/admin-signup" element={<AdminSignup />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
