import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../config/configAxios";
import { baseUrl } from "../../config/configUrls";

const GitHubCallback: React.FC = () => {
  const location = useLocation();
  const history = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get("code");
    const state = searchParams.get("state");

    if (!code) {
      console.error("Authorization code not found");
      return;
    }

    const exchangeCodeForToken = async (authCode: string) => {
      try {
        const response = await axiosInstance.get(`${baseUrl.redirect}`, {
          params: {
            provider: "github",
            code: authCode,
          },
        });

        if (response.data.status === "success") {
          const tokenData = response.data.data.token;
          // Save tokenData to localStorage
          localStorage.setItem("githubToken", JSON.stringify(tokenData));
          // Redirect or update the application state as needed
          history("/dashboard/home"); // Change '/dashboard' to your desired path
        } else {
          console.error("Failed to get token");
        }
      } catch (error) {
        console.error("Error exchanging code for token:", error);
      }
    };

    exchangeCodeForToken(code);
  }, [location]);

  return <div>Processing GitHub OAuth callback...</div>;
};

export default GitHubCallback;
