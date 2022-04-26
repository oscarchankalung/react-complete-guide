import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const getActiveClassName = ({ isActive }) => {
    return isActive ? classes.active : "";
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Greate Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="quotes" className={getActiveClassName}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="quotes/new" className={getActiveClassName}>
              New Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
