import React, { Component } from 'react';
import Header from '../Header';
import HeaderLogo from '../HeaderLogo';
import HeaderMenu from '../HeaderMenu';
import MainContent from '../MainContent';
import MovieCardsField from '../MovieCardsFields';
import MovieForm from '../MovieForm';
import './styles.css';

class App extends Component {
    render() {
        return (
            <div className="Container">
                <div className="Wrapper">
                    <Header>
                        <HeaderLogo logoName="Movie Mate" />
                        <HeaderMenu src="https://google.com" />
                    </Header>
                    <MainContent>
                        <MovieCardsField />
                        <MovieForm />
                    </MainContent>
                </div>
            </div>
        );
    }
}

export default App;
