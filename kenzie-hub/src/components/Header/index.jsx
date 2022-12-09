import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <img src={Logo} alt="" />
      <button>
        <Link to="/">Sair</Link>
      </button>
    </StyledHeader>
  );
};

export default Header;
