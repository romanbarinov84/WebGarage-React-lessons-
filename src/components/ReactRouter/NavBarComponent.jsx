import styled from "styled-components";
import { Link } from "react-router";

const StyledLink = styled(Link)`
  color: red;
  text-decoration: none;
  margin: 10px;

  &:hover {
    color: lightblue;
    text-decoration: underline;
    font-size: 14px;
  }
`;

const NavBarComponent = () => {
  return (
    <nav>
      <StyledLink to="/">На главную</StyledLink>
      <StyledLink to="/about">О нас</StyledLink>
      <StyledLink to="/contact">Контакты</StyledLink>
    </nav>
  );
};

export default NavBarComponent;