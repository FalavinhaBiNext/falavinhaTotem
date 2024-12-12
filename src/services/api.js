import axios from "axios";

export const apiUrl = "https://rafae4699.c44.integrator.host/totem/lead/create";
export const axiosInstance = axios.create({
  baseURL: apiUrl,
});

