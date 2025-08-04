import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5d1beb25e1a94af8a0df032bb78a79d9"
  }
})