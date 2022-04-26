import { Outlet } from "react-router-dom";
import React from "react";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Outlet />
    </section>
  );
};

export default Welcome;
