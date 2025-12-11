import React from "react";
import { Route, Routes } from "react-router-dom";
import CounterComp from "../Practice/CounterComp";
import ProductComp from "../Components/ProductComp";
import MealsComp from "../Components/MealsComp";
import ProductDetail from "../Components/ProductDetail";

const Routings = () => {
  return (
    <Routes>
      <Route path="/CounterComp" element={<CounterComp />} />
      <Route path="/" element={<ProductComp />} />
      <Route path="/MealsComp" element={<MealsComp />} />
      <Route path="/ProductDetail/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default Routings;
