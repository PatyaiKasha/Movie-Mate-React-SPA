import React from 'react';
import PropTypes from "prop-types";

const Btn = ({type, text, className, onClick}) => (
    <a type={type} className={className} onClick={onClick}>{text}</a>
);

Btn.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func //.isRequired
};

export default Btn;