import styled from "styled-components";
import {COLORS} from "../../constants";

export const LanguageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1vw 2vw;
  box-sizing: border-box;
  background: ${() => COLORS.blue} ;
`;

export const LanguageImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  cursor: pointer;
  //@media (max-width: 768px) {
  //  margin-right: 10px;
  //
  //
  //}
  //@media (max-width: 576px) {
  //  width: 40%;
  //}
`;
