import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/dining" element={<Dining />} /> */}
        {/* <Route path="/menu" element={<Menu />} /> */}
        {/* <Route path="/singleproduct/:id" element={<SingleMenu />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/sale" element={<Sale />} /> */}
        {/* <Route path="/payment" element={<Payment />} />  */}
      </Routes>
    </div>
  );
};

export default AllRoutes;
