import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeToFav } from "../Redux/cartSlice";
import { BsHeartbreak, BsArrowLeft } from "react-icons/bs";

const Favourite = () => {
  const dispatch = useDispatch();
  const favoritesData = useSelector((store) => store.fav);

  const removeHandler = (idMeal) => {
    dispatch(removeToFav(idMeal));
  };

  return (
    <div className="container my-5">
      {favoritesData && favoritesData.length > 0 ? (
        <>
          {/* Header Section */}
          <div className="text-center mb-5">
            <h1 className="display-6 fw-bold text-danger border-bottom d-inline-block pb-2">
              My Favorites
            </h1>
          </div>

          <div className="row g-4 justify-content-center">
            {favoritesData.map((item, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={item.idMeal || i}>
                <div className="card h-100 shadow-sm border-0 hover-shadow transition">
                  {/* Meal Image */}
                  <div className="p-3">
                    <img
                      src={item.strMealThumb}
                      alt={item.strMeal}
                      className="card-img-top rounded shadow-sm"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  </div>

                  <div className="card-body pt-0 text-center">
                    <h5 className="card-title fw-bold text-dark mb-3">
                      {item.strMeal}
                    </h5>
                    
                    <div className="row g-2">
                      <div className="col-6">
                        <button
                          className="btn btn-outline-danger w-100 fw-semibold"
                          onClick={() => removeHandler(item.idMeal)}
                        >
                          Remove
                        </button>
                      </div>
                      <div className="col-6">
                        <Link
                          to={`/ProductDetail/${item.idMeal}`}
                          className="text-decoration-none"
                        >
                          <button className="btn btn-dark w-100 fw-semibold">
                            Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Empty State (Matched to Cart style) */
        <div className="text-center py-5 mt-5">
          <div className="display-1 text-muted mb-3">
            <BsHeartbreak />
          </div>
          <h2 className="fw-bold text-secondary">No favorites yet</h2>
          <p className="text-muted mb-4">
            Start adding your favorite meals to see them here!
          </p>
          <Link
            to="/"
            className="btn btn-danger btn-lg px-5 rounded-pill shadow transform transition hover-scale"
          >
            <BsArrowLeft className="me-2" />
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default Favourite;