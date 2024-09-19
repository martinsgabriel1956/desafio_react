import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/users/",
  headers: {
    'Authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
  }
});