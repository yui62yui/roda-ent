import { LeftWrapper, RightWrapper, Wrapper } from "./StyledHeader";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <Link to={"/"}>
        <LeftWrapper></LeftWrapper>
      </Link>
      <RightWrapper>
        <NavLink
          className={({ isActive }) => (isActive ? "activated" : "")}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activated" : "")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activated" : "")}
          to="/artist"
        >
          Artist
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activated" : "")}
          to="/audition"
        >
          Audition
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activated" : "")}
          to="/notice"
        >
          Notice
        </NavLink>
      </RightWrapper>
    </Wrapper>
  );
};

export default Header;
