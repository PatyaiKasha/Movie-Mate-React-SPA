import React from "react";
import PropTypes from "prop-types";

const HeaderLogo = ({logoName}) => {
    return (
        <div>
            <div className="Header__logo">{logoName}</div>
        </div>
    );
}

HeaderLogo.propTypes = {
    logoName: PropTypes.string.isRequired
};

export default HeaderLogo;