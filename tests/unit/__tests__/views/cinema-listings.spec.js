import { render, fireEvent, waitFor, getAllByText } from "@testing-library/vue";
import MovieListApiService from "@/services/api/movie-list.api";
import CinemaListings from "../../../../src/views/cinema-listings";
import { getRandomMovies } from "../../../__mocks__/movie.mock";
import { renderOptionsMock } from "../../../__mocks__/render-options.mock";

const renderCinemaListings = () => render(CinemaListings, renderOptionsMock);

describe("Cinema Listings Tests", () => {
  describe("with random movies", () => {
    beforeEach(() => {
      jest
        .spyOn(MovieListApiService, "getListByCategoryId")
        .mockReturnValue(getRandomMovies(10));

      jest.clearAllMocks();
    });

    afterAll(() => {
      jest
        .spyOn(MovieListApiService, "getListByCategoryId")
        .mockReturnValue(null);
    });

    test("should correctly render random movies", async () => {
      const { queryAllByText } = renderCinemaListings();

      await waitFor(() =>
        expect(queryAllByText(/the forever purge/i).length).toBe(10)
      );

      expect(queryAllByText(/adventure/i).length).toBe(10);
    });

    test("should correctly redirect to the category section", async () => {
      const { getAllByText } = renderCinemaListings();

      await waitFor(() => fireEvent.click(getAllByText(/adventure/i)[0]));

      const mockedRoute = renderOptionsMock.global.mocks.$router.push;

      expect(mockedRoute).toHaveBeenCalledTimes(1);
      expect(mockedRoute).toHaveBeenCalledWith("/category/12");
    });
  });
});
