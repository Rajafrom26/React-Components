import axios from "axios";
import React, { Component, useContext, useEffect, useState } from "react";
import { myState } from "../Context/ContextProvider";
import { Link } from "react-router-dom";
import MealLoader from '../MealLoader/MealLoader';

const MealsComp = () => {
  const [categoriesName] = useContext(myState);
  const [categories, setCategories] = React.useState([]);
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
  const fetchCategories = async () => {
    try {
      setLoading(true);
      
       const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoriesName}`,
      );
      setCategories(data.meals || []); 
      
    } catch (error) {
      console.error("Fetch failed:", error);
    } finally {
      setTimeout(() => setLoading(false), 2000);
    }
  };

  if (categoriesName) {
    fetchCategories();
  }
}, [categoriesName]);

  return (
    <div className="container Meals">
      <div className="row mt-5">
        {Loading  ?(<MealLoader />) :
         (
          categories.map((item, i) => (
            <div className="col-md-4 mb-4" key={item.idMeal}>
              <Link
                to={`/ProductDetail/${item.idMeal}`}
                className="card rounded p-3 shadow"
                key={i}
              >
                <img
                  src={item.strMealThumb}
                  className="card-img-top"
                  alt={item.strMeal}
                />
                <h5 className="card-title">{item.strMeal}</h5>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MealsComp;
