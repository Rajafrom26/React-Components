import React, { Fragment } from "react";

import NavbarComp from "./Components/NavbarComp";
import Routings from "./Routings/Routings";
import ProductComp from "./Components/ProductComp";
import ProductDetail from "./Components/ProductDetail";


function App() {
  return (
    <Fragment>
      <NavbarComp />
        <ProductDetail />
      <Routings />
    </Fragment>
  );
}

export default App;
