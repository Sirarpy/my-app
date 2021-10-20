import styled from "styled-components";
import {COLORS} from "../../constants";

export const LanguageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 15px 100px;
  box-sizing: border-box;
  background: ${() => COLORS.blue} ;
`;

export const LanguageImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  cursor: pointer;
`;
