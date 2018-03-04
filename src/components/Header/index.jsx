import React, {Component} from "react";
// import HeaderLogo from "../HeaderLogo"; import HeaderMenu from
// "../HeaderMenu";
import "./styles.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        {/* <HeaderLogo logoName="Movie Mate"/>
        <HeaderMenu src="https://google.com"/> */}
        {this.props.children}
      </div>
    );
  }
}

export default Header;
