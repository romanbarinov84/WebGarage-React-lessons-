import { NavLink } from "react-router";

const NavBarWithNavLink = () => {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          margin: "10px",
          textDecoration: "none"
        })}
      >
        Главная
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          margin: "10px",
          textDecoration: "none"
        })}
      >
        О нас
      </NavLink>

      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          margin: "10px",
          textDecoration: "none"
        })}
      >
        Контакты
      </NavLink>
    </nav>
  );
};

export default NavBarWithNavLink;