import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/users/",
  headers: {
    "Access-Control-Allow-Origin": import.meta.env.VITE_HOST,
  },
});
