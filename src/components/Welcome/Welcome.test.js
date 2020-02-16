import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { act } from "react-dom/test-utils";
import Welcome from "./Welcome";

describe("<Welcome />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const newGameMock = jest.fn();
  const Component = mount(
    <Router>
      <Welcome newGame={newGameMock} />
    </Router>
  );

  it("should render without throwing an error", () => {
    expect(Component.length).toBe(1);
  });

  it("should match snapshot", () => {
    expect(Component).toMatchSnapshot();
  });

  it("should call newGameMock 1 time when component did mount", () => {
    // trigger useEffect
    act(() => {
      mount(
        <Router>
          <Welcome newGame={newGameMock} />
        </Router>
      );
    });
    expect(newGameMock).toBeCalledTimes(1);
  });

  it("should render 2 Link", () => {
    const Links = Component.find(Link);
    expect(Links.length).toBe(2);
  });
});
