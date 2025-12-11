import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);

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

  return (
    <div className="container mt-5">
      {product && (
        <div className="row">
          <div className="col-lg-6">
            <img src={product.strMealThumb} className="img-0 w-100"/>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
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
              </div>
              <div className="col-lg-6">
                <p className="badge bg-black">
                  Category: {product.strCategory}
                </p>
                <p className="badge bg-secondary ms-2">{product.strTags}</p>
                <div className="row">
                  <div className="col-lg-6">
                    <a
                      href={product.strYoutube || "#"}
                      className="btn btn-info text-light d-flex justify-content-center"
                      target="_blank"
                      title="see Video for the reference"
                      rel="noopener"
                      onClick={handelVideoClick}
                    >
                      video
                    </a>
                  </div>
                  <div className="col-lg-6">
                    <button
                      className="btn btn-primary"
                      title="click to add fav"
                    >
                      Add to favorites
                    </button>
                  </div>
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
