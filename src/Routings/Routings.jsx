import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductComp from "../Components/ProductComp";
import MealsComp from "../Components/MealsComp";
import ProductDetail from "../Components/ProductDetail";
import Favourite from "../Components/Favourite";


const Routings = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductComp />} />
      <Route path="/MealsComp" element={<MealsComp />} />
      <Route path="/ProductDetail/:id" element={<ProductDetail />} />
      <Route path="/favourite" element={<Favourite />} />
    </Routes>
  );
};

export default Routings;
