import React, { Component } from "react";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Wrapper">
          <Header />
          <MainContent />
        </div>
      </div>
    );
  }
}

export default App;
