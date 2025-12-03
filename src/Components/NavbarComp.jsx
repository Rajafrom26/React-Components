import React from "react";
import { Link } from "react-router-dom";
import { myState } from "../Routings/Context/ContextProvider";

const NavbarComp = () => {
  const [search, setState] = React.useContext(myState);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          LOGO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/CounterComp" className="nav-link">
                CounterComp
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/FolderComp" className="nav-link">
                FolderComp
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/TimeComp" className="nav-link">
                TimeComp
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/TodoComp" className="nav-link">
                TodoComp
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/MealsComp" className="nav-link">
                MealsComponent
              </Link>
            </li>
          </ul>
          <form
            className="d-flex"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <Link to="/MealsComp" className="dev2">
              <input
                className="form-control me-2"
                type="search"
                placeholder="What you want to eat?"
                onChange={(e) => setState(e.target.value)}
              />
            </Link>
            <button className="btn btn-outline-success ms-1" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;
