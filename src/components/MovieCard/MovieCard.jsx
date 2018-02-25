import React, { Component } from "react";
import "./MovieCard.css";

const Title = props => {
  return (
    <div className="MovieCard__Head">
      <div className="MovieCard__Title">Star Wars</div>
    </div>
  );
};

const Btn = props => {
  return <a className="MovieCard__btn MovieCard__btn_del">Delete</a>;
};

const Description = props => {
  return <div className="MovieCard__Description">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non laudantium eveniet libero, esse aspernatur tempore, expedita deleniti debitis fuga, voluptatum veritatis officia. Soluta quidem, odio quaerat magni nihil laborum minima? Aperiam, nulla ipsa!
    </div>;
};

const Raiting = props => {
  return <div className="MovieCard__Raiting">Raiting 7/10</div>;
};

const Category = props => {
  return <div className="MovieCard__Category">action</div>;
};

class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="MovieCard" act="action">
        <Title />
        <Btn />
        <Description />
        <Raiting />
        <div className="MovieCard__chip-list">
          <Category />
          <Category />
          <Category />
        </div>
      </div>
    );
  }
}

export default MovieCard;
