import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import Board from "./Board";
import Row from "../Row";
import { NewGameStyled } from "./styled";

describe("<Board />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const onNewGameMock = jest.fn();
  const Component = mount(
    <Router>
      <Board
        onNewGame={onNewGameMock}
        matrices={[[], [], [], []]}
        loading={false}
        error={null}
      />
    </Router>
  );

  it("should render without throwing an error", () => {
    expect(Component.length).toBe(1);
  });

  it("should match snapshot", () => {
    expect(Component).toMatchSnapshot();
  });

  it("should call onNewGameMock 1 time when New game button is clicked", () => {
    const NewGameBtn = Component.find(NewGameStyled).at(0);
    NewGameBtn.simulate("click");
    expect(onNewGameMock).toBeCalledTimes(1);
  });

  it("should render 4 Row component", () => {
    const Rows = Component.find(Row);
    expect(Rows.length).toBe(4);
  });
});
