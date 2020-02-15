import React from "react";
import { shallow, mount } from "enzyme";
import Cell from "./Cell";
import { CellWrapper } from "./styled";
import { GAME_STATUS } from "../../constants/game";

describe("<Cell />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const openCellMock = jest.fn();
  const CellComponent = (
    <Cell
      cell={{
        isOpen: false,
        x: 0,
        y: 0,
        minesAround: 0
      }}
      openCell={openCellMock}
      gameStatus={GAME_STATUS.NOT_START}
    />
  );

  it("should render without throwing an error", () => {
    expect(shallow(CellComponent).length).toBe(1);
  });
  it("should match snapshot", () => {
    expect(shallow(CellComponent)).toMatchSnapshot();
  });
  it("should call openCellMock 1 time when clicked", () => {
    const CellWrapperElement = mount(CellComponent)
      .find(CellWrapper)
      .at(0);
    CellWrapperElement.simulate("click");

    expect(openCellMock).toBeCalledTimes(1);
  });
});
