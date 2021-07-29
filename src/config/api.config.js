import axios from "axios";

export default axios.create({
  baseURL: process.env.VUE_APP_TMDB_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.VUE_APP_TMDB_API_TOKEN}`,
  },
  params: {
    api_key: process.env.VUE_APP_TMDB_API_TOKEN,
    language: "en-US",
  },
});
