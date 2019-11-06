import axios from "axios";

const BASE_URL = process.env.NODE_ENV === "production" ? "https://reign-design-test.herokuapp.com/" : "http://localhost:4000/";
const api = axios.create({baseURL: BASE_URL});

export default api;