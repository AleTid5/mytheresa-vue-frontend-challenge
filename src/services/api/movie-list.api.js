import api from "@/config/api.config";

export default {
  getListByGenreId: async (genreId) => {
    const {
      data: { results },
    } = await api.get(`/genre/${genreId}/movies`);

    return results;
  },
};
