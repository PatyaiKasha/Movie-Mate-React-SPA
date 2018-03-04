import React, {Component} from 'react';
import Btn from "../Btn";
import Category from '../MovieCategory';
import './styles.css';

class MovieCard extends Component {
    render() {
        return (
            <div className="MovieCard" act="action">
                <div className="MovieCard__Head">
                    <div className="MovieCard__Title">Star Wars</div>
                </div>
                <Btn
                    type="delete"
                    text="Delete"
                    className="MovieCard__btn MovieCard__btn_del"/>
                <div className="MovieCard__Description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non laudantium eveniet
                    libero, esse aspernatur tempore, expedita deleniti debitis fuga, voluptatum
                    veritatis officia. Soluta quidem, odio quaerat magni nihil laborum minima?
                    Aperiam, nulla ipsa!
                </div>
                <div className="MovieCard__Raiting">Raiting 7/10</div>
                <div className="MovieCard__chip-list">
                    <Category cat="action"/>
                    <Category cat="drama"/>
                    <Category cat="comegy"/>
                </div>
            </div>
        )
    }
}

export default MovieCard;