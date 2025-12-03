import axios from "axios";
import React, { Component, useContext } from "react";
import { myState } from "../Routings/Context/ContextProvider";

const MealsComp = () => {
  const [categoriesName, setcat] = useContext(myState);
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
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
          categories.meals.map((item) => (
            <div className="col-md-4 mb-4" key={item.idMeal}>
              <div className="card rounded p-3 shadow">
                <img
                  src={item.strMealThumb}
                  className="card-img-top"
                  alt={item.strMeal}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.strMeal}</h5>
                </div>
              </div>
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
