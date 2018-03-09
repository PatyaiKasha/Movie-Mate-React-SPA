import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Btn from '../Btn';
import Category from '../MovieCategory';
import './styles.css';

class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const { title, text, rating } = this.props;
        return (
            <div className="MovieCard" act="action">
                <div className="MovieCard__Head">
                    <div className="MovieCard__Title">{title}</div>
                </div>
                <Btn
                    type="delete"
                    text="Delete"
                    className="MovieCard__btn MovieCard__btn_del"
                />
                <div className="MovieCard__Description">{text}</div>
                <div className="MovieCard__Raiting">Raiting {rating}/10</div>
                <div className="MovieCard__chip-list">
                    <Category cat="action" />
                    <Category cat="drama" />
                    <Category cat="comegy" />
                </div>                
            </div>
        );
    }
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
};

export default MovieCard;
