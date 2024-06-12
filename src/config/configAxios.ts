import axios, { InternalAxiosRequestConfig } from "axios";

// Create a custom Axios instance with a base URL
const axiosInstance = axios.create({
  baseURL: "https://github-poc.onrender.com", // Update with your API base URL
});
const excludePaths = ["/login","/redirect"];
// Add a request interceptor to the axios instance
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    // Check if the request URL matches any of the exclude paths
    const isExcludedPath = excludePaths.some((path) =>
      config.url?.includes(path)
    );

    // If the path is not excluded, add the Bearer token to the header
    if (!isExcludedPath) {
      const authTokenRaw = localStorage.getItem("githubToken");
      let authToken = null; // Initialize authToken as null

      if (authTokenRaw !== null) {
        try {
          const authTokenObj = JSON.parse(authTokenRaw);
          authToken = authTokenObj.token.access_token;
        } catch (error) {
          console.error("Error parsing authToken:", error);
          // Handle parsing error
        }
      }

      if (authToken) {
        // Append the token as a query parameter
        config.params = { ...config.params, token: authToken };
      } else {
        console.log("No auth token found or parsing failed.");
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
