import axios from "axios";
import React, { Component, useContext, useEffect } from "react";
import { myState } from "../Context/ContextProvider";
import { Link } from "react-router-dom";

const MealsComp = () => {
  const [categoriesName] = useContext(myState);
  const [categories, setCategories] = React.useState([]);


  useEffect(() => {
    fetchCategories();
  }, [categoriesName]);

  const fetchCategories = async () => {
    const { data } = await axios(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoriesName}`
    );
    setCategories(data);
  };

  return (
    <div className="container">
      <div className="row mt-5">
        {categories.meals && categories.meals.length > 0 ? (
          categories.meals.map((item, i) => (
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
        ) : (
          <div>
            <h2 className="bg-info text-center text-danger">
              Try to Search Based on The Products
            </h2>
            <p className="text-center w-50 text-primary">
              Example chicken...Beef..etc
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealsComp;
