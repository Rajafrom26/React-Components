import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { myState } from "../Context/ContextProvider";

const ProductComp = () => {
  const [products, setProducts] = React.useState([]);
  const [items, setItems] = useContext(myState);

  const handleClick = (name) => {
    setItems(name);
  };

  useEffect(() => {
    productdetails();
  }, []);

  const productdetails = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php",
    );
    setProducts(data);
  };

  return (
    <div className="container p-3 Meals">
      <h3 className="border-bottom border-3 border-secondary br-sec">Categories</h3>
      <div className="row m-3">
        {products && products.categories && products.categories.length > 0 ? (
          products.categories.map((items, i) => {
            return (
              <Link
                to={`/MealsComp`}
                onClick={() => handleClick(items.strCategory)}
                className="col-md-2 card p-2 m-2"
                key={i}
              >
                <img src={items.strCategoryThumb} alt={items.idCategory} />
                <h6> {items.strCategory}</h6>
              </Link>
            );
          })
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="loader-wrapper">
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffc107"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* The Mixing Bowl */}
          <path d="M3 12c0 5 4 9 9 9s9-4 9-9H3Z" className="bowl" />
          
          {/* The Whisk Icon */}
          <g className="whisk-group">
            <path d="M12 2v7" />
            <path d="M9 5c0-1.5 1.5-3 3-3s3 1.5 3 3-1.5 3-3 3-3-1.5-3-3Z" />
          </g>
        </svg>
      </div>
      <p className="mt-4 text-warning fw-bold text-uppercase tracking-widest animate-flicker">
        Mixing Ingredients...
      </p>
    </div>
        )}
      </div>
    </div>
  );
};

export default ProductComp;
