import React, { Component } from "react";
import "./Header.css";

function Logo() {
  const logo = "Movie Mate";
  return (
    <div>
      <div className="Header__logo">{logo}</div>
    </div>
  );
}

function HeaderMenu() {
  return (
    <ul className="Header__menu">
      <li className="Header__menu-item">
        <a href="https://google.com" className="Header__menu-link">
          About
        </a>
      </li>
      <li className="Header__menu-item">
        <a href="https://google.com" className="Header__menu-link">
          Browse
        </a>
      </li>
      <li className="Header__menu-item">
        <a href="https://google.com" className="Header__menu-link">
          Login
        </a>
      </li>
    </ul>
  );
}

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Logo />
        <HeaderMenu />
      </div>
    );
  }
}

export default Header;
