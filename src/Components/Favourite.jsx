import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../Redux/store";
import { Link } from "react-router-dom";
import { removeToFav } from "../Redux/cartSlice";
import { BsCartPlusFill } from "react-icons/bs";

const Favourite = () => {
  const dispatch = useDispatch();
  const favoritesData = useSelector((store) => store.fav);

  const removeHandler = (idMeal) => {
    dispatch(removeToFav(idMeal));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {favoritesData.length > 0 ? (
          favoritesData.map((item, i) => (
            <div className="col-lg-4 col-md-6">
              <div className="card mb-5" key={i}>
                <img src={item.strMealThumb} alt={item.idMeal} />
                <div className="row">
                  <div className="col-lg-6">
                    <button
                      className="btn bg-danger w-100"
                      onClick={() => removeHandler(item.idMeal)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="col-lg-6">
                    <Link
                      to={`/ProductDetail/${item.idMeal}`}
                      key={i}
                    >
                      <button className="btn bg-black text-white w-100">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <figure>
            <h3>
              <BsCartPlusFill className="me-2" />
              Cart Is Empty
            </h3>
            <img src="https://img.icons8.com/clouds/1200/add-shopping-cart.jpg" alt="img-cart" className="cart" />
            <Link to="/" className="btn btn-danger position-absolute bottom-0 mb-5">Home</Link>
          </figure>
        )}
      </div>
    </div>
  );
};

export default Favourite;
