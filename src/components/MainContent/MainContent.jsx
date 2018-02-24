import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import MovieForm from "../MovieForm/MovieForm";
import "./MainContent.css";
import "../MovieForm/MovieForm.css";

const MovieContent = props => {
  return (
    <div className="MovieContent">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
};

class MainContent extends Component {
  render() {
    return <div className="MainContent">
        <MovieContent />
        <MovieForm />
      </div>;
  }
}
export default MainContent;
