import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import AuthenticationForm from "./pages/Login/AuthenticationForm";
import App from "./App";
import React from "react";
import { BasicAppShell } from "./pages/Home/Home";
import AuthenticationHandler from "./pages/Login/AuthenticationHandler";
import RepoRoles from "./pages/RepoRoles/RepoRoles";
import GitHubCallback from "./components/LoginRedirect/LoginRedirectHandler";
import RepoRolesHandler from "./pages/RepoRoles/RepoRolesHandler";
import ChooseRepo from "./pages/ChooseRepo/ChooseRepo";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthenticationHandler />} />
      <Route path="/github/callback" element={<GitHubCallback />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoutes>
            <App />
          </PrivateRoutes>
        }
      >
        <Route path="home" element={<ChooseRepo />} />
        <Route path=":owner/:repo" element={<RepoRolesHandler />} />
      </Route>
    </Routes>
  );
};

const AppRouter = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default AppRouter;
