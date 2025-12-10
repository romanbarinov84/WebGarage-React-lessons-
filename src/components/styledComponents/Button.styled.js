import styled from "styled-components";

export const ButtonStyled = styled.button`
  margin: 10px;
  color: #000;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$highLighting ? "cornflowerblue" : "#ff6633"};

  box-shadow: 0 0 5px #d4af37, 0 0 15px #d4af37, 0 0 20px #d4af37;

  &:hover {
    background: linear-gradient(135deg, #f5d76e, #d1a63b);
    color: #000;
    padding: 12px 20px;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;

    box-shadow: 0 4px 10px rgba(212, 175, 55, 0.6),
      0 2px 6px rgba(156, 130, 38, 0.7) inset;
  }
`;
