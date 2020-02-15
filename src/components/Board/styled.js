import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 30px;
`;

export const LoadingStyled = styled.span`
  font-size: 20px;
`;

export const ErrorStyled = styled.span`
  font-size: 20px;
  color: #ff4141;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
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

export const HomeStyled = styled(Link)`
  ${HeaderBtn}
`;
