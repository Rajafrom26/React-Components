import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../Redux/store";
import { Link } from "react-router-dom";
import { removeToFav } from "../Redux/cartSlice";

const Favourite = () => {
  const dispatch = useDispatch();
  const favoritesData = useSelector((store) => store.fav);

  const removeHandler = (idMeal) => {
    dispatch(removeToFav(idMeal))
  }

  return (
    <div className="container d-flex mt-5">
      <div className="row">
        {favoritesData.length > 0 ? (
          favoritesData.map((item, i) => (
            <div className="col-lg-4">
              <div className="card mb-5" key={i}>
                <img src={item.strMealThumb} alt={item.idMeal} />
                <div className="row">
                  <div className="col-lg-6">
                    <button className="btn bg-danger w-100" onClick={() => removeHandler(item.idMeal)}>Remove</button>
                  </div>
                  <div className="col-lg-6">
                    <Link to={`/ProductDetail/${item.idMeal}`} key={item.idMeal}>
                      <button className="btn bg-black text-white w-100" >
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3 className="d-flex justify-content-center">Cart Is Empty</h3>
        )}
      </div>
    </div>
  );
};

export default Favourite;
