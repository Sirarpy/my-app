import styled from "styled-components";
import {COLORS} from "../../constants";

export const Container = styled.div`
  width: 25%;
  border-radius: 0 0 10px 10px;
  box-sizing: border-box;
  margin: 15% auto 0;
  position: relative;
  background-color: ${() => COLORS.darkGreen};
  padding: 10px;
  z-index: 9;
  &:before {
    border-bottom: 10vw solid  ${() => COLORS.lightGreen};
    border-left: 12.5vw solid transparent;
    border-right: 12.5vw solid transparent;
    content: "";
    height: 0;
    left: 0;
    position: absolute;
    top: -10vw;
    width: 0;
    @media (max-width: 768px) {
      border-bottom: 15vw solid ${() => COLORS.lightGreen};
      border-left: 30vw solid transparent;
      border-right: 30vw solid transparent;
      top: -15vw;
    }
    @media (max-width: 576px) {
      border-left: 40vw solid transparent;
      border-right: 40vw solid transparent;
      top: -15vw;
    }
  }
  @media (max-width: 768px) {
    width: 60%;
    margin-top: 20%;
  }
  @media (max-width: 576px) {
    width: 80%;
  }
`;

export const AuthTitle = styled.h1`
  color: ${() => COLORS.lightGreen};
  text-align: center;
`;

///*********same in QRStyles input***************
export const Input = styled.input`
  width: 100%;
  display: block;
  border: none;
  border-bottom: 2px solid ${() => COLORS.lightGreen};
  font-size: 1em;
  color: ${() => COLORS.lightGreen};
  padding: 0.5em 1em;
  outline: none;
  box-sizing: border-box;
  background: #2121211a;
  margin: 1vw 0;
  ::placeholder {
    color: ${() => COLORS.lightGreen};
  }
`;
//**************same *************
export const Button = styled.button`
  background: ${() => COLORS.lightGreen};
  padding: 0.7em 1em;
  border: none;
  display: block;
  cursor: pointer;
  width: 100%;
  margin-top: 2vw;
  // color: ${() => COLORS.inputColor};
`;

export const Link = styled.a`
  color: ${() => COLORS.inputColor};
  font-size: 1em;
  width: 100%;
  letter-spacing: 1px;
  text-transform: uppercase;

`;

export const Span = styled.span`
  cursor: pointer;
  text-underline: none;
  font-size: .7em;
  padding: 10px;
  color: ${() => COLORS.lightGreen};
`;


export const Warning = styled.p`
  text-align: center;
  color: ${() => COLORS.gray};
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
  line-height: 20px;
  border-radius: 10px;
  padding: 10px;
`;

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoaderText = styled.p`
  font-size: 16px;
`;
