import { render, fireEvent } from "@testing-library/vue";
import CinemaListings from "../../../../src/views/cinema-listings";

describe("Cinema Listings Tests", () => {
  beforeEach(() => {
    location.href = "http://localhost";
  });

  afterAll(() => {});

  test("should correctly render random movies", () => {
    const { container } = render(CinemaListings);

    console.log(container.outerHTML);
  });
});
