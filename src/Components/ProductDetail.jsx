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
        <div className="row">
          <div className="col-lg-6 layer-1">
            <figure className="position-relative">
              <Magnifier src={product.strMealThumb} zoom={1.9} 
                className="img-magnifier"
              />
              <p className="badge bg-black position-absolute badge-0">
                Category: {product.strCategory}
              </p>
            </figure>

            <div className="row mt-4 mb-3 justify-content-around">
              <div className="col-md-3">
                <a
                  href={product.strYoutube || "#"}
                  className="btn btn-info text-light d-flex justify-content-center screen"
                  target="_blank"
                  title="see Video for the reference"
                  rel="noopener"
                  onClick={handelVideoClick}
                >
                  video
                </a>
              </div>
              <div className="col-md-6">
                <button
                  className={`btn ${isAdded ? "btn-secondary" : "btn-primary"} screen-1`}
                  title={isAdded ? "Already in favorites" : "Click to add fav"}
                  disabled={isAdded}
                  onClick={() => AddToFavHandler(product)}
                >
                  {isAdded ? "Succesfully added!" : "Add to favorites"}
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 layer-1">
            <p>
              <strong>Meal name :</strong> {product.strMeal}
            </p>
            <div className="card p-4">
              <strong>Instructions:</strong>
              <ol className="mt-2">
                {product.strInstructions
                  .split(/\d+\.\s/)
                  .filter((step) => step.trim() !== "")
                  .map((step, index) => (
                    <li key={index}>{step.trim()}</li>
                  ))}
              </ol>
            </div>
            <div className="card p-4 mt-1 mb-5">
              <strong>Ingredients</strong>
              <ol className="mt-2">
                {extractIngredientsWithMeasures(product).map((item, i) => (
                  <li key={i}>
                    {item.ingredient} — <strong>{item.measure}</strong>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
