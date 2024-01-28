import { act } from "react-dom/test-utils";
import { render, screen, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/resMenuMock.json";
import "@testing-library/jest-dom";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should load RestautrantMenu Component", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
          <Cart />
        </BrowserRouter>
      </Provider>
    );
  });

  const accordianHeader = screen.getByText(/Sharing Combos/);
  expect(accordianHeader).toBeInTheDocument();

  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(23);

  const BeforeClickCartItems = screen.getByText("Cart(0)");
  expect(BeforeClickCartItems).toBeInTheDocument();

  const addBtn = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtn[0]);

  const AfterClickCartItems = screen.getByText("Cart(1)");
  expect(AfterClickCartItems).toBeInTheDocument();

  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart(2)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(25);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(23);
  expect(screen.getByText("Cart(0)")).toBeInTheDocument();

  expect(
    screen.getByText("Cart is Empty , Please Enter Some Items")
  ).toBeInTheDocument();
});
