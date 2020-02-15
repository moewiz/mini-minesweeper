import styled, { css } from "styled-components";

export const CellWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid;
  border-color: #000;
  background: ${props => (props.isOpen ? "#e4e4e4" : "#fff")};
  font-weight: 600;
  ${props =>
    props.isMine &&
    props.isOpen &&
    css`
      position: relative;
      &:after {
        content: "";
        position: absolute;
        background: #24292e !important;
        border: 1px solid #24292e;
        border-radius: 50%;
        top: 4px;
        left: 4px;
        width: 20px;
        height: 20px;
      }
    `}
  &:hover {
    background: #e4e4e4;
  }
`;
