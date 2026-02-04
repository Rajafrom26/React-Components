import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToFav } from "../Redux/cartSlice";
import Magnifier from "../Magnifier/Magnifier";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      if (data.meals && data.meals.length > 0) {
        setProduct(data.meals[0]);
      }
    } catch (e) {
      console.error("Error while fetching the data:", e);
    }
  };

  const handleMissingLink = () => {
    alert(`Video Unavailable for ${product.strMeal}!`);
  };

  const handelVideoClick = (event) => {
    if (!product.strYoutube) {
      event.preventDefault();
      handleMissingLink();
    }
  };

  const extractIngredientsWithMeasures = (product) => {
    const items = [];
    for (let i = 1; i <= 20; i++) {
      const ing = product[`strIngredient${i}`];
      const measure = product[`strMeasure${i}`];
      if (ing && ing.trim() !== "") {
        items.push({
          ingredient: ing,
          measure: measure || "",
        });
      }
    }
    return items;
  };

  const AddToFavHandler = (product) => {
    dispatch(addToFav(product));
  };

  const favorites = useSelector((state) => state.fav);
  const isAdded = favorites.some((item) => item.idMeal === id);

  return (
    <div className="container mt-5 min-vh-100">
      {product && (
        <div className="row g-4">
          {/* Left Section */}
          <div className="col-lg-6">
            <div className="card shadow-lg border-0 rounded-3 p-3">
              {/* Centered Image */}
              <figure className="d-flex justify-content-center mb-3">
                <Magnifier
                  src={product.strMealThumb}
                  zoom={2}
                  className="img-fluid rounded"
                />
              </figure>
              <span className="badge bg-dark mx-auto mb-3 position-absolute">
                Category: {product.strCategory}
              </span>

              {/* Buttons aligned center */}
              <div className="d-flex justify-content-center gap-3">
                <a
                  href={product.strYoutube || "#"}
                  className="btn btn-outline-info"
                  target="_blank"
                  rel="noopener"
                  onClick={handelVideoClick}
                >
                  🎥 Watch Video
                </a>
                <button
                  className={`btn ${
                    isAdded ? "btn-success" : "btn-primary"
                  }`}
                  disabled={isAdded}
                  onClick={() => AddToFavHandler(product)}
                >
                  {isAdded ? "✔ Added to Favorites" : "❤️ Add to Favorites"}
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-lg-6">
            <div className="card shadow-sm border-0 p-4">
              <h3 className="fw-bold mb-3 text-center">{product.strMeal}</h3>

              {/* Instructions */}
              <div className="mb-4">
                <h5 className="text-primary">📖 Instructions</h5>
                <ul className="list-group list-group-flush mt-2">
                  {product.strInstructions
                    .split(/\d+\.\s/)
                    .filter((step) => step.trim() !== "")
                    .map((step, index) => (
                      <li
                        key={index}
                        className="list-group-item border-0 ps-0"
                      >
                        <span className="fw-bold me-2">Step {index + 1}:</span>
                        {step.trim()}
                      </li>
                    ))}
                </ul>
              </div>

              {/* Ingredients */}
              <div>
                <h5 className="text-success">🥗 Ingredients</h5>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  {extractIngredientsWithMeasures(product).map((item, i) => (
                    <span
                      key={i}
                      className="badge bg-light text-dark border rounded-pill px-3 py-2"
                    >
                      {item.ingredient} — <strong>{item.measure}</strong>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;