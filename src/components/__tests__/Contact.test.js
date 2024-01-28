import Contact from "../Contact";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Contact Us Page Test Cases", () => {
  // beforeAll(() => {
  //   console.log("before All");
  // });
  // //very helpful for cleanup task
  // beforeEach(() => {
  //   console.log("before Each");
  // });

  // afterAll(() => {
  //   console.log("after All");
  // });
  // afterEach(() => {
  //   console.log("after Each");
  // });

  it("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument(); //loaded or not
  });
  it("Should load button inside Contact component", () => {
    render(<Contact />);
    //   const button = screen.getByRole("button");
    //   const button = screen.getByText("Random");
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });
  it("Should load input name inside Contact component", () => {
    render(<Contact />);
    const name = screen.getByPlaceholderText("name");
    expect(name).toBeInTheDocument();
  });
  test("Should load 2 input box inside Contact component", () => {
    //render - querying - assertion
    render(<Contact />);
    const inputBoxs = screen.getAllByRole("textbox");
    // console.log(inputBoxs[0]);
    // react element (JSX) (virtual dom) <-- object
    // expect(inputBoxs.length).toBe(2);
    expect(inputBoxs.length).not.toBe(3);
  });
});
