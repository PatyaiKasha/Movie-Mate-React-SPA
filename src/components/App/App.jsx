import React, { Component } from "react";
import Header from "../Header";
import MainContent from "../MainContent";
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
