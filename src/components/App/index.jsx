import React, { Component } from 'react';
import Header from '../Header';
import HeaderLogo from '../HeaderLogo';
import HeaderMenu from '../HeaderMenu';
import MainContent from '../MainContent';
import MovieCardsField from '../MovieCardsFields';
import MovieForm from '../MovieForm';
import movieCards from "../mockup.js";

import './styles.css';

class App extends Component {
  state = {
    mCard: movieCards
    // mCard: []
  };
  

  onDelete = id => {
    // console.log (id)
    this.setState=({
      mCard: this.state.mCard.filter(card => card.id !== id)
    });
  };

//   onDeleteTodo = id => {
//     this.setState({
//       todos: this.state.todos.filter(todo => todo.id !== id)
//     });
//   };

  render() {
       console.log(this.state);
    return (
      <div className="Container">
        <div className="Wrapper">
          <Header>
            <HeaderLogo logoName="Movie Mate" />
            <HeaderMenu src="https://google.com" />
          </Header>
          <MainContent>
            <MovieCardsField onCardClick={this.onDelete} />
            <MovieForm />
          </MainContent>
        </div>
      </div>
    );
  }
}

export default App;
