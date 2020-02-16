import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import Row from "./Row";
import Cell from "../Cell";
import configureStore from "../../store";
const { store } = configureStore();

describe("<Row />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const Component = mount(
    <Provider store={store}>
      <Row
        row={[
          { x: 0, y: 0, minesAround: 0, isOpen: false },
          { x: 0, y: 1, minesAround: 0, isOpen: false },
          { x: 0, y: 2, minesAround: 0, isOpen: false },
          { x: 0, y: 3, minesAround: 0, isOpen: false }
        ]}
      />
    </Provider>
  );

  it("should render without throwing an error", () => {
    expect(Component.length).toBe(1);
  });

  it("should match snapshot", () => {
    expect(Component).toMatchSnapshot();
  });

  it("should render 4 Cell component", () => {
    const Cells = Component.find(Cell);
    expect(Cells.length).toBe(4);
  });
});
