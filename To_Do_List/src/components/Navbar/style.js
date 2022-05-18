import styled from "styled-components";
export const FlexContener = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 80%;
  max-width: 1600px;
  margin: 0 auto;
`;
export const Heder = styled.div`
  width: 100%;
  height: 80px;
  background: linear-gradient(189.77deg, #fff 35.48%, #000 64.42%);
  opacity: 0.8;
`;
export const TitelHeader = styled.p`
  font-size: 30px;
  font-family: "Abel", sans-serif;
  color: white;
  margin-left: 25px;
  transition: all ease-in-out 0.5s;
  :hover {
    font-size: 40px;
  }

  span {
    font-family: cursive;
    margin-left: 4px;
  }
`;
