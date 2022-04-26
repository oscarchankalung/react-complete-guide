import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  const getActiveClassName = ({ isActive }) => {
    return isActive ? classes.active : "";
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={getActiveClassName} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink className={getActiveClassName} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
