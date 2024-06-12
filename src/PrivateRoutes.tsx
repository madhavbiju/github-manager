import React, { useState, useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const PrivateRoutes = ({ children }: ProtectedRouteProps) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const tokenData = localStorage.getItem("githubToken");
    if (tokenData) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  }, []);

  if (!isAuthorized) {
    // Render UnauthorizedPage directly without navigating
    return <h1>Login!</h1>;
  }

  return <>{children}</>;
};

export default PrivateRoutes;
