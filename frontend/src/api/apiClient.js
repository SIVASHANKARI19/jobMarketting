import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api", // base URL for all requests
  headers: {
    "Content-Type": "application/json", // default JSON headers
  },
});

// Intercept responses to catch errors globally
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;
