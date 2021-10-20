import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  @media (max-width: 768px) {
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