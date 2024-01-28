import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resResListMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
//fetch --> return Promise --> return json --> return promise
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should Search Res List for burger text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  //   expect(searchBtn).toBeInTheDocument();
  const searchInput = screen.getByTestId("searchInput");
  //event.target.value
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  //screen should load 1 cards
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(1);
});

it("should show 4 cards on click of top restaurants", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const filter = screen.getByRole("button", { name: "Top Rated Restaurants" });
  fireEvent.click(filter);

  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(4);
});
