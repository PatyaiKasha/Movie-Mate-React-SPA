import React, {Component} from "react";
import MovieForm from "../MovieForm";
import MovieCards from "../MovieCards";
import "./styles.css";
import "../MovieForm/styles.css";

class MainContent extends Component {
  render() {
    return <div className="MainContent">
      <MovieCards/>
      <MovieForm/>
    </div>;
  }
}

export default MainContent;
