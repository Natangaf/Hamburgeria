import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_DETALRES,
  timeout: 70000,
});

export const apiMenu = axios.create({
  baseURL: process.env.REACT_APP_DETALMENU,
  timeout: 7000,
});
