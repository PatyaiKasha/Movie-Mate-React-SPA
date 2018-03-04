import React, {Component} from "react";
// import MovieCardsField from "../MovieCardsFields"; import MovieForm from
// "../MovieForm";
import "./styles.css";
import "../MovieForm/styles.css";

class MainContent extends Component {
  render() {
    return (
      <div className="MainContent">
        {/* <MovieCardsField/>
        <MovieForm/> */}
        {this.props.children}
      </div>
    );
  }
}

export default MainContent;
