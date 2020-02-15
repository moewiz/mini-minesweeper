import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 30px;
`;

export const GroupLevelStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 350px;
  justify-content: space-around;
`;

export const LevelBtnStyled = styled(Link)`
  font-size: 20px;
  color: #000;
  border: 1px solid;
  padding: 15px;
  text-decoration: none;
  display: flex;
  &:hover {
    text-decoration: underline;
  }
`;
