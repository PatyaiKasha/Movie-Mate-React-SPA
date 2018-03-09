import React, { Component } from 'react';
// import HeaderLogo from "../HeaderLogo"; import HeaderMenu from
// "../HeaderMenu";
import './styles.css';

class Header extends Component {
    render() {
        return <div className="Header">{this.props.children}</div>;
    }
}

export default Header;
