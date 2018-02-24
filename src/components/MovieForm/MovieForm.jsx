import React, { Component } from "react";
import "./MovieForm.css";

const Title = props => {
  return (
    <div>
      <p>Title</p>
      <input className="MovieForm__Title" type="text" />
    </div>
  );
};

const Descr = props => {
  return (
    <div>
      <p>Description</p>
      <textarea className="MovieForm__Descr" type="text" />
    </div>
  );
};

const Raiting = props => {
  return (
    <div>
      <p>Raiting</p>
      <select className="Raiting" name="raiting">
        <option value="1">1</option>
        <option value="1">2</option>
        <option value="1">3</option>
        <option value="1">4</option>
        <option value="1">5</option>
        <option value="1">6</option>
        <option value="1">7</option>
        <option value="1">8</option>
        <option value="1">9</option>
        <option value="1">10</option>
      </select>
    </div>
  );
};

const Btn = props => {
  return <a className="MovieForm__btn MovieForm__btn_submit">Submit</a>;
};

class MovieForm extends Component {
  render() {
    return (
      <div className="MovieForm">
        <Title />
        <Descr />
        <Raiting />
        <Btn />
      </div>
    );
  }
}

export default MovieForm;
