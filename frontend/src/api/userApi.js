import apiClient from "./apiClient";

export const createUser = async (userData) => {
  const response = await apiClient.post("/users", userData);
  return response.data;
};

export const getAllUsers = async () => {
  const response = await apiClient.get("/users");
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await apiClient.post("/users/login", credentials);
  return response.data;
};
