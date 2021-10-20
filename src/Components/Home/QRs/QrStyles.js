import styled from "styled-components";
import {COLORS} from "../../../constants"

export const QRContainer = styled.div`
  width: 40vw;
  border: 1px solid ${() => COLORS.blue};
  border-radius: 10px;
  box-sizing: border-box;
  //margin: 7rem auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 70px auto 0;
`;


export const QRCreateTitle = styled.h1`
  color: ${() => COLORS.blue};
  text-align: center;
`;

///*********same in Authenticatin input***************
export const QRInput = styled.input`
  width: 100%;
  display: block;
  border: none;
  border-bottom: 2px solid ${() => COLORS.blue};
  font-size: 1em;
  color: ${() => COLORS.blue};
  padding: 0.5em 1em;
  outline: none;
  box-sizing: border-box;
  background: #2121211a;
  margin: 1vw 0;

  ::placeholder {
    color: ${() => COLORS.blue};
  }
`;

export const QRButton = styled.button`
  background: linear-gradient(45deg, #39b7dd, #e8e8e8);
  padding: 0.7em 1em;
  border: none;
  display: block;
  cursor: pointer;
  width: 100%;
  margin-top: 2vw;
  color: ${() => COLORS.blue};
  //font-weight: bold;
  font: 1.5vw bold;

  &:hover {
    background: linear-gradient(45deg, #045772, #e8e8e8);
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
  border: 2px solid ${() => COLORS.blue};
  box-shadow: 3px 3px 5px ${() => COLORS.blue};;
  text-align: center;
  border-radius: 10px;
  padding: 10px;
`;


export const QRImage = styled.img`
  width: 80%;
  height: auto;
`;

export const QRList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  box-sizing: border-box;
  width: 100%;
  margin-top: 15px;
  align-items: center;
  flex-direction: row;
  background-color: ${() => COLORS.blue};
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const QRListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1200px) {
    margin: 2vw auto;
  }
`;

export const QRTitle = styled.div`
  text-transform: uppercase;
  color: ${() => COLORS.gray};
`;

export const QRListButtons = styled.div`
  color: ${() => COLORS.blue};
  border: none;
  outline: none;
  background-color: ${() => COLORS.gray};
  margin-left: 5px;
  text-transform: uppercase;
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
  box-sizing: border-box;
  display: block;
  border-radius: 5px;

  &:hover {
    opacity: .5;
  }
`;

export const QRDownload = styled.a`
  color: ${() => COLORS.blue};

`;