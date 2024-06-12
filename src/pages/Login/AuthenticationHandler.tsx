import React, { useEffect, useState } from "react";
import getGitHubAuthUrl from "./api/AuthenticationApi";
import AuthenticationForm from "./AuthenticationForm";

const AuthenticationHandler = () => {
  const [authUrl, setAuthUrl] = useState<string>("");

  useEffect(() => {
    const fetchAuthUrl = async () => {
      const url = await getGitHubAuthUrl();
      setAuthUrl(url!);
    };

    fetchAuthUrl();
  }, []);
  return <AuthenticationForm authUrl={authUrl} />;
};

export default AuthenticationHandler;
