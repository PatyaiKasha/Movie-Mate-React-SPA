import React, {Component} from "react";
import Btn from '../Btn';
import "./styles.css";

const Title = props => {
  return (
    <label className="MovieForm__lable" htmlFor="">
      Title
      <input className="MovieForm__Title" type="text"/>
    </label>
  );
};

const Descr = props => {
  return (
    <label className="MovieForm__lable" htmlFor="">
      Description
      <textarea className="MovieForm__Descr" type="text"/>
    </label>
  );
};

const Raiting = props => {
  return (
    <label className="MovieForm__lable" htmlFor="">
      <p>Raiting</p>
      <select className="Raiting" name="raiting">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </label>
  );
};

const Genres = props => {
  return (
    <label className="MovieForm__lable" htmlFor="">
      <div className="MovieGenre">
        <label htmlFor="drama">
          <input type="checkbox" name="drama"/>
          drama
        </label>
        <label htmlFor="action">
          <input type="checkbox" name="action"/>
          action
        </label>
        <label htmlFor="comedy">
          <input type="checkbox" name="comedy"/>
          comedy
        </label>
      </div>
    </label>
  );
};

class MovieForm extends Component {
  render() {
    return (
      <form className="MovieForm">
        <Title/>
        <Descr/>
        <Raiting/>
        <Genres/>
        <Btn
          type="submit"
          text="Submit"
          className="MovieForm__btn MovieForm__btn_submit"/>
      </form>
    );
  }
}

export default MovieForm;