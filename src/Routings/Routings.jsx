import React from "react";
import { Route, Routes } from "react-router-dom";
import CounterComp from "../Components/CounterComp";
import FolderComp from "../Components/FolderComp";
import TimeComp from "../Components/TimeComp";
import TodoComp from "../Components/TodoComp";
import ProductComp from "../Components/ProductComp";
import MealsComp from "../Components/MealsComp";

const Routings = () => {
  return (
    <Routes>
      <Route path="/CounterComp" element={<CounterComp />} />
      <Route path="/FolderComp" element={<FolderComp />} />
      <Route path="/TimeComp" element={<TimeComp />} />
      <Route path="/TodoComp" element={<TodoComp />} />
      <Route path="/" element={<ProductComp />} />
      <Route path="/MealsComp" element={<MealsComp />} />
    </Routes>
  );
};

export default Routings;
