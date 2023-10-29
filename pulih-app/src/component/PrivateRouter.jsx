import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
