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
  return (
    <div className="MovieCard__Description">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
      explicabo blanditiis officiis error quidem fuga, alias quas, officia,
      aperiam placeat sed voluptate? Dignissimos reiciendis corporis harum.
      Laborum dolorem enim nam consequuntur, optio magnam nemo a aperiam sequi,
      nesciunt laudantium in dicta sapiente porro, quas nobis reiciendis
      assumenda tenetur? Dolores, non.
    </div>
  );
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
