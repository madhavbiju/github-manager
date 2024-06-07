import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const [signIn, setSignIn] = useState(true);

  if (signIn) {
    return <Navigate to="/admin/dashboard" />;
  } else return <Navigate to="/login" />;
};

export default PrivateRoutes;
