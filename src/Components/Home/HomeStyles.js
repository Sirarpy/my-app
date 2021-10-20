import styled from "styled-components";
import {COLORS} from "../../constants";

export const HomeContainer = styled.div`
  width: 80%;
  margin: 100px auto;
`;
export const HomeContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  //margin-top: 100px;
`;

export const BubbleContainer = styled.div`
  width: 250px;
  height: 250px;
  position: relative;
`;
export const Bubble = styled.div`
  content: "";
  border-radius: 54% 46% 42% 58% / 60% 58% 42% 40%;
  background-image: linear-gradient(to right top,#051937,#383544,#0ea2af,#002dbf,#39b7dd);
  animation: vawe 5s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 5px 5px 7px ${() => COLORS.blue};

`;


export const ContainerItem = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 1px solid ${() => COLORS.blue};
  box-shadow: 3px 3px 5px ${() => COLORS.blue};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 18px;
  background-color: ${() => COLORS.blue};
  color: ${() => COLORS.gray};

  &:hover  {
    transition: 0.4s;
    background-color: ${() => COLORS.gray};
    // color: ${() => COLORS.white};
    cursor: pointer;
    color: ${() => COLORS.blue};
  }
`;


export const HomeTitle = styled.h2`
  color: ${() => COLORS.blue};
  text-align: center;
  text-transform: uppercase;
`;


export const Avatar = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100px;
  border: 1px solid ${() => COLORS.blue};
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  box-shadow: 1px 1px 3px ${() => COLORS.blue};

`;

