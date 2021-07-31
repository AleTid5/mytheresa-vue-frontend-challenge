import api from "@/config/api.config";

export default {
  getListByCategoryId: async (categoryId) => {
    const {
      data: { results },
    } = await api.get(`/genre/${categoryId}/movies`);

    return results;
  },
};
