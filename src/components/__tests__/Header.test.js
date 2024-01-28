import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header Component Page Test Cases", () => {
  it("should load component with login btn", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "login" });
    //   const loginButton = screen.getByText("login");
    expect(loginButton).toBeInTheDocument();
  });

  it("should have cart with zero items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText("Cart(0)");
    expect(cartItems).toBeInTheDocument();
  });

  it("should have cart items (any number)", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
  });

  it("switch - login|logout", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", { name: "login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});
