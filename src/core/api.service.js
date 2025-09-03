import { apiClient } from "./api";

export const getClients = async () => {
  const response = await apiClient.get("/clients");

  return response.data;
};

export const deleteClient = async (id) => {
  const response = await apiClient.delete(`/clients/${id}`);

  return response.data;
};

export const addClient = async (body) => {
  const response = await apiClient.post(`/clients`, body);
  return response.data;
};
