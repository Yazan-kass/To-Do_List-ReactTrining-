import styled from "styled-components";
export const StyledButton = styled.button`
  min-width: 25%;
  height: 42px;
  padding: 15px 20px;
  box-sizing: border-box;
  font-size: 22px;
  background: ${(props) =>
    props.isWhite
      ? "white"
      : "linear-gradient(189.77deg, #86838b 14.69%, #201f24 85.31%)"};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.isWhite ? "black" : "white")};
  border: none;
  font-weight: bold;
  cursor: pointer;
  :hover {
    min-width: 25%;
    height: 45px;
    transition: all ease-in-out 0.5s;
    font-size: 40px;
  }
`;
