import React, { Fragment } from "react";

import NavbarComp from "./Components/NavbarComp";
import Routings from "./Routings/Routings";
import Footer from "./Components/Footer";



function App() {
  return (
    <Fragment>
      <NavbarComp />
      <Routings />
      <Footer />
    </Fragment>
  );
}

export default App;
