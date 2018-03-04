import React from "react";
import PropTypes from "prop-types";

const HeaderMenu = ({src}) => {
    return (
        <ul className="Header__menu">
            <li className="Header__menu-item">
                <a href={src} className="Header__menu-link">
                    About
                </a>
            </li>
            <li className="Header__menu-item">
                <a href={src} className="Header__menu-link">
                    Browse
                </a>
            </li>
            <li className="Header__menu-item">
                <a href={src} className="Header__menu-link">
                    Login
                </a>
            </li>
        </ul>
    );
}

HeaderMenu.propTypes = {
    src: PropTypes.string.isRequired
}

export default HeaderMenu;