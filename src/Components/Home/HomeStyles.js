import styled from "styled-components";
import {COLORS} from "../../constants";

export const HomeContainer = styled.div`
  width: 50%;
  margin: 5% auto ;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const HomeContent = styled.div`
  margin: 7% 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
   flex-direction: column;
  }
`;

export const BubbleContainer = styled.div`
  width: 250px;
  height: 250px;
  position: relative;
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;
export const Bubble = styled.div`
  content: "";
  border-radius: 54% 46% 42% 58% / 60% 58% 42% 40%;
  background-image: linear-gradient(to right top,#00989d,#3faba0,#9ae3e5,#67f9ff,#15d1db);
  animation: vawe 5s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 5px 5px 7px ${() => COLORS.lightGreen};
  &:hover {
    background:${() => COLORS.darkGreen};
  }
  }
`;

export const ContainerItem = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 18px;
  color: ${() => COLORS.inputColor};
  &:hover  {
    transition: 0.4s;
    cursor: pointer;
    color: ${() => COLORS.lightGreen};
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
  border: 1px solid ${() => COLORS.darkGreen};
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  box-shadow: 1px 1px 3px ${() => COLORS.lightGreen};
`;

