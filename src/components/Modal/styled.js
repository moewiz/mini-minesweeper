import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderBtn = css`
  color: #000;
  cursor: pointer;
  font-size: 20px;
  padding: 10px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const NewGameStyled = styled.div`
  ${HeaderBtn}
`;

export const HomeLinkStyled = styled(Link)`
  ${HeaderBtn}
`;

export const MessageStyled = styled.div`
  font-size: 20px;
  text-align: center;
  margin-top: 5px;
`;
