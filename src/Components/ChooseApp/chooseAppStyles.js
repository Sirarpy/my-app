import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 10% auto;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  @media (max-width: 768px) {
    width: 80%;
    flex-direction: column;
  }
`;
export const ChooseAppImage = styled.img`
  width: 30%;
  cursor: pointer;
  display: block;
  @media (max-width: 768px) {
    width: 60%;
  }
`;