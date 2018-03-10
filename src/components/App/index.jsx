import React, { Component } from 'react';
import Header from '../Header';
import HeaderLogo from '../HeaderLogo';
import HeaderMenu from '../HeaderMenu';
import MainContent from '../MainContent';
import MovieCardsField from '../MovieCardsFields';
import MovieForm from '../MovieForm';
import movieCards from '../mockup.js';
import v4 from 'uuid/v4';
import './styles.css';

class App extends Component {
    state = {
        mCards: movieCards
    };

    onAddCard = ( title, text, raiting, genre ) => {
        const mCard = {
            id: v4(),
            title: title,
            text: text,
            raiting: raiting,
            genre: genre
        };
        this.setState( {
            mCard: [
                ...this.state.mCards,
                mCard
            ]
        } );
    };

    onDeleteCard = id => {
        this.setState( {
            mCards: this.state.mCards.filter( card => card.id !== id )
        } );
    };

    render() {
        return ( <div className="Container">
            <div className="Wrapper">
                <Header>
                    <HeaderLogo logoName="Movie Mate"/>
                    <HeaderMenu src="https://google.com"/>
                </Header>
                <MainContent>
                    <MovieCardsField mCards={this.state.mCards} onCardClick={this.onDeleteCard}/>
                    <MovieForm/>
                </MainContent>
            </div>
        </div> );
    }
}

export default App;
