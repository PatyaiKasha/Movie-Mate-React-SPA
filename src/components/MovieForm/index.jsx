import React, { Component } from 'react';
import Btn from '../Btn';
import v4 from 'uuid/v4';
import './styles.css';

class MovieForm extends Component {
    state = {
        idx: v4(),
        genres: ['action', 'drama', 'comedy'],
        val: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
    render() {
        return (
            <form className="MovieForm">
                {/* <Title /> */}
                <label className="MovieForm__lable" htmlFor="">
                    Title
                    <input className="MovieForm__Title" type="text" />
                </label>
                {/* <Descr /> */}
                <label className="MovieForm__lable" htmlFor="">
                    Description
                    <textarea className="MovieForm__Descr" type="text" />
                </label>
                {/* <Raiting /> */}
                <label className="MovieForm__lable" htmlFor="">
                    <p>Raiting</p>
                    <select className="Raiting" name="raiting">
                        {this.state.val.map(item => (
                            <option key={v4()} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </label>
                {/* <Genres /> */}
                <label className="MovieForm__lable" htmlFor="">
                    <div className="MovieGenre">
                        {this.state.genres.map((item, idx) => (
                            <label key={v4()} htmlFor={idx}>
                                <input type="checkbox" id={idx} />
                                {item}
                            </label>
                        ))}
                    </div>
                </label>
                <Btn
                    type="submit"
                    text="Submit"
                    className="MovieForm__btn MovieForm__btn_submit"
                />
            </form>
        );
    }
}

export default MovieForm;
