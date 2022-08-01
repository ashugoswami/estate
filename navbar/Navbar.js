import React from "react";
import "./navbar.css";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";

export default function Navbar() {
  return (
    <>
      <nav className="navbar header navbar-expand-lg bg-light">
        <div className="container-fluid">
          <OtherHousesIcon style={{ color: "rgb(113, 84, 243)" }} />
          <div className="navbar-brand mx-2" href="#">
            Estatery
          </div>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
              <li className="nav-item mx-2">
                <div className="nav-link " aria-current="page" href="#">
                  Rent
                </div>
              </li>
              <li className="nav-item mx-3">
                <div className="nav-link" href="#">
                  Buy
                </div>
              </li>
              <li className="nav-item mx-3">
                <div className="nav-link" href="#">
                  Sell
                </div>
              </li>
              <li className="nav-item dropdown mx-3">
                <div
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Manage Property
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <div className="dropdown-item" href="#">
                      Action
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item" href="#">
                      Another action
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <div className="dropdown-item" href="#">
                      Something else here
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown mx-3">
                <div
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <div className="dropdown-item" href="#">
                      Action
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item" href="#">
                      Another action
                    </div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <div className="dropdown-item" href="#">
                      Something else here
                    </div>
                  </li>
                </ul>
              </li>
            </ul>

            <button className="btn btn-outline-dark">Log In</button>
            <button className="btn btn-outline-dark signup-btn mx-3">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
