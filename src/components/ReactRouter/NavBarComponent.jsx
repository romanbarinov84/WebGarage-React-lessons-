import styled from "styled-components";
import { Link } from "react-router";

const StyledLink = styled(Link)`
  color: #2b2626;
  text-decoration: none;
  margin: 10px;

  &:hover {
    color: #edf1f3;
    text-decoration: underline;
    font-size: 14px;
  }
`;

const NavBarComponent = () => {
  return (
    <nav  style={{background:"lightBlue"}}>
      <StyledLink to="/">На главную</StyledLink>
      <StyledLink to="/about">О нас</StyledLink>
      <StyledLink to="/contact">Контакты</StyledLink>
    </nav>
  );
};

export default NavBarComponent;