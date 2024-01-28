import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard Component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Domino's Pizza");
  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard Component with PromotedLabel", () => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  render(<RestaurantCardPromoted resData={MOCK_DATA} />);
  const label = screen.getByText("In Ghodasar");
  expect(label).toBeInTheDocument();
});
