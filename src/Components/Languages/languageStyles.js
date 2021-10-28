import styled from "styled-components";
import {COLORS} from "../../constants";

export const LanguageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1vw 2vw;
  box-sizing: border-box;
  background: ${() => COLORS.darkGreen} ;
`;

export const LanguageImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  cursor: pointer;
`;
