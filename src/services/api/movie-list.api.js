import api from "@/config/api.config";

export default {
  getListByCategoryId: async (categoryId) => {
    const {
      data: { results },
    } = await api.get(`/genre/${categoryId}/movies`);

    return results;
  },
  getListByQuery: async (query) => {
    const {
      data: { results },
    } = await api.get("/search/movie", { params: { query } });

    return results;
  },
  getMovieById: async (movieId) => {
    const { data } = await api.get(`/movie/${movieId}`);

    return data;
  },
};
