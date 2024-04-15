import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <nav className="d-flex justify-content-between">
      <div className="d-flex mt-1 ms-2">
        <img
          src="https://www.logolynx.com/images/logolynx/c4/c4e297cf6b1f22c8df0e7d5ef5bf846e.png"
          className="ms-2 rounded-circle d-block mb-2"
          style={{ width: "60px", height: "60px" }}
          alt=""
        />
        <p className="fs-3 expensetracker text-white mt-2">Expense Tracker</p>
      </div>

      <ul className="nav nav-underline mt-1 me-2">
        <li className="nav-item fs-4 pe-5 mt-2">
          <a className="nav-link link-light" href="#">
            Home
          </a>
        </li>
        <li className="nav-item fs-4 pe-5 mt-2">
          <a className="nav-link link-light" href="#">
            History
          </a>
        </li>
        <li className="nav-item mt-2 fs-4 pe-5">
          <a className="nav-link link-light" href="#">
            Profile
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
