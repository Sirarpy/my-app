import styled from "styled-components";

export const Back = styled.button`
  font-size: 16px;
  padding: 10px 15px;
  //background: linear-gradient(11deg, #07181d, #39b7dd);
  background: rgba(0,0,0,.87);
  color: rgb(57 183 221);
  cursor: pointer;
  text-transform: uppercase;
  width: 30%;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  &:hover {
    background: linear-gradient(11deg, #03262d, #39b7dd);
    transition: 0.2s;
    color: rgb(0,0,0,.87);
  }
  @media (max-width: 768px) {
    width: 40%;

  }
  @media (max-width: 576px) {
    width: 50%;
  }
`;

