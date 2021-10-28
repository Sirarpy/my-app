import styled from "styled-components";
import {COLORS} from "../../../constants"

export const QRContainer = styled.div`
  width: 40vw;
  border: 1px solid ${() => COLORS.darkGreen};
  border-radius: 10px;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 70px auto 0;
  @media (max-width: 976px) {
    width: 50vw;
  }
  
  @media (max-width: 768px) {
    width: 60vw;
  }
  @media (max-width: 576px) {
    width: 80vw;
  }
`;


export const QRCreateTitle = styled.h1`
  color: ${() => COLORS.darkGreen};
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const QRInput = styled.input`
  width: 100%;
  display: block;
  border: none;
  border-bottom: 2px solid ${() => COLORS.darkGreen};
  font-size: 1em;
  color: ${() => COLORS.inputColor};
  padding: 0.5em 1em;
  outline: none;
  box-sizing: border-box;
  background: ${() => COLORS.lightGreen};
  margin: 1vw 0;
  @media (max-width: 976px) {
    font-size: 1.2em;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 576px) {
  }
  ::placeholder {
    color: ${() => COLORS.inputColor};
  }
`;

export const QRButton = styled.button`
  background-color: ${() => COLORS.darkGreen};;
  padding: 0.7em 1em;
  border: none;
  display: block;
  cursor: pointer;
  width: 100%;
  margin-top: 2vw;
  color: ${() => COLORS.lightGreen};
  font: 1em bold;

  @media (max-width: 976px) {
    font: 1.2em bold;
  }
  &:hover {
    background: linear-gradient(45deg, ${() => COLORS.darkGreen}, ${() => COLORS.lightGreen});
  }
`;

export const Img = styled.img`
  width: 40%;
  src: url(${props => props.src});
`;


export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  border: 2px solid ${() => COLORS.darkGreen};
  box-shadow: 3px 3px 5px ${() => COLORS.darkGreen};;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
`;


export const QRImage = styled.img`
  width: 60%;
  height: auto;
  @media only screen and (max-width: 976px) {
    width: 40%;

  }
  @media only screen and (max-width: 1200px) {
    width: 35%;

  }
`;

export const QRList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  box-sizing: border-box;
  width: 100%;
  margin-top: 15px;
  align-items: center;
  //flex-direction: row;
  background-color: ${() => COLORS.lightGreen};
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const QRListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  &.actions{
    @media only screen and (max-width: 576px) {
      width: 100%;
      flex-direction: column;
      margin-bottom: 10px;
    }
  }
`;

export const QRTitle = styled.p`
  text-transform: uppercase;
  color: ${() => COLORS.inputColor};
  @media only screen and (max-width: 768px) {
    font: 1.2em bold;
  }
`;

export const QRListButtons = styled.div`
  color: ${() => COLORS.lightGreen};
  background-color: ${() => COLORS.darkGreen};
  margin-left: 5px;
  text-transform: uppercase;
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 5px;
  @media only screen and (max-width: 576px) {
    width: 100%;
  }
  &:hover {
    opacity: .5;
  }
`;

export const QRDownload = styled.a`
  color: ${() => COLORS.lightGreen};
`;