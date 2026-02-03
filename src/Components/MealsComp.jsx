import axios from "axios";
import React, { Component, useContext, useEffect, useState } from "react";
import { myState } from "../Context/ContextProvider";
import { Link } from "react-router-dom";
import MealLoader from "../MealLoader/MealLoader";

const MealsComp = () => {
  const [categoriesName] = useContext(myState);
  const [categories, setCategories] = React.useState([]);
  const [Loading, setLoading] = useState(true);

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
    if (!categoriesName) return;
  }, [categoriesName]);

  return (
    <div className="container Meals">
      <div className="row m(t-5">
        {!categoriesName ? (
          <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
            <svg
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6c757d"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Plate */}
              <circle cx="11" cy="11" r="8" />
              {/* Search Handle */}
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              {/* Steam / Aroma */}
              <path d="M11 8c.5-1 2-1 2.5 0" />
            </svg>
            <h2 className="mt-4 text-secondary fw-light">Hungry?</h2>
            <p className="text-muted">
              Search for <span className="text-warning">Chicken</span>,{" "}
              <span className="text-warning">Beef</span>, or{" "}
              <span className="text-warning">Vegan</span> above!
            </p>
          </div>
        ) : Loading ? (
          <MealLoader />
        ) : (
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
