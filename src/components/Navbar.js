import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.jpg";

const NavbarContainer = styled.div`
  background-color: var(--light-bg-color);
  color: var(--main-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;

  img {
    width: 150px;
  }

  .right-nav-items a {
    padding: 0px 10px !important;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="left-nav-items">
        <img src={logo} />
      </div>
      <div className="right-nav-items">
        <a href="#services">Servicios</a>
        <a href="#about">Conócenos</a>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
