import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { myState } from "../Context/ContextProvider";

const ProductComp = () => {
  const [products, setProducts] = React.useState([]);
  const [items, setItems] = useContext(myState)

  const handleClick = (name) => {
    setItems(name)
  }
  
  useEffect(() => {
    productdetails();
  }, []);

  const productdetails = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    setProducts(data);
  };


  return (
    <div className="container p-3">
      <h3>Products Page</h3>
      <div className="row m-3">
        {products && products.categories && products.categories.length > 0 ? (
          products.categories.map((items, i) => {
            return (
              
              <Link to={`/MealsComp`} onClick={() => handleClick(items.strCategory)} className="col-md-2 card p-2 m-2" key={i}>
                <img src={items.strCategoryThumb} alt={items.idCategory} />
                <h6> {items.strCategory}</h6>
              </Link>
            );
          })
        ) : (
          <h2 className="text-warning">Loading.....</h2>
        )}
      </div>
    </div>
  );
};

export default ProductComp;
