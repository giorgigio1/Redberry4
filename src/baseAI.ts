import axios from "axios";

const token = process.env.REACT_APP_API_TOKEN;

export const baseApi = axios.create({
  baseURL: "https://api.blog.redberryinternship.ge/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
