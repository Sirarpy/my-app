import styled from "styled-components";
import {COLORS} from "../../constants";

export const Back = styled.button`
  font-size: 16px;
  padding: 10px 15px;
  background: ${() => COLORS.lightGreen};
  color: ${() => COLORS.inputColor};
  cursor: pointer;
  text-transform: uppercase;
  width: 30%;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  border: none;
  outline: none;
  &:hover {
    background: linear-gradient(11deg, ${() => COLORS.darkGreen},  ${() => COLORS.lightGreen});
    transition: 0.2s;
    color: rgb(0,0,0,.87);
  }
  @media (max-width: 1200px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
  @media (max-width: 576px) {
    width: 60%;
  }
`;

