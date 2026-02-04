import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { myState } from "../Context/ContextProvider";
import { Link } from "react-router-dom";
import MealLoader from "../MealLoader/MealLoader";

const MealsComp = () => {
  const [categoriesName] = useContext(myState);
  const [categories, setCategories] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoriesName}`
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
          categories.map((item) => (
            <div
              className="col-sm-6 col-md-4 col-lg-3 mb-4 d-flex"
              key={item.idMeal}
            >
              <Link
                to={`/ProductDetail/${item.idMeal}`}
                className="card rounded shadow-sm text-decoration-none flex-fill meal-card"
              >
                <img
                  src={item.strMealThumb}
                  className="card-img-top img-fluid rounded-top"
                  alt={item.strMeal}
                />
                <div className="card-body text-center">
                  <h6 className="card-title text-dark">{item.strMeal}</h6>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MealsComp;