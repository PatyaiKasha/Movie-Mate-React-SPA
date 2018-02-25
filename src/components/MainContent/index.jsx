import React, { Component } from "react";
import MovieCard from "../MovieCard";
import MovieForm from "../MovieForm";
import "./styles.css";
import "../MovieForm/styles.css";

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
