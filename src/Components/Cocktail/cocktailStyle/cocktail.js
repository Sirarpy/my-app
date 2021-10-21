import styled from "styled-components";
import bg from './cocktailImg/nolist.png';

export const CocktailBG = styled.div`
  width: 300px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CocktailBGImage = styled.img`
  cursor: pointer;
  width: 100%;
  object-fit: contain;
`;
export const Back = styled.p`
  font-size: 20px;
  padding: 10px 15px;

`;
export const CurrentDrinkBG = styled.div`
  width: 100%;
  background-image: url(${bg});
  height: 100vh;
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  //opacity: 7%;
`;

export const CurrentDrinkBanner = styled.div`
  width: 60%;
  margin: auto;
  background: #ffffffcc;
  display: flex;
  //flex-shrink: 1;
  padding: 5vw;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CurrentDrinkItem = styled.div`
  width: 45%;
`;


export const CocktailItemImage = styled.img`
  width: 100%;
`;
export const Paragraph = styled.p`
  line-height: 20px;
  letter-spacing: 1px;
  font-size: 1.2vw;
`;

export const Span = styled.span`
  font-size: 1.2vw;
  padding: 5px;
  text-transform: capitalize;
  margin-right: 15px;
  width: 10vw;
  display: inline-block;
  letter-spacing: 0;
  border-radius: 5px;
  background: linear-gradient(45deg, #399576, #51e3cd94);


`;
