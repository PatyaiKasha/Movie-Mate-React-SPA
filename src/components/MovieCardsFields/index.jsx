import React from 'react';
import MovieCard from '../MovieCard';
import movieCards from '../mockup.js';

const MovieCardsFields = props => {
    // const items = movieCards.map((card, idx) => <MovieCard key={idx}
    // {...card}/>);
    return (
        <div className="MovieContent">
            {/* {items} */}
            {/*Упростил запись*/}
            {movieCards.map(card => <MovieCard key={card.id} {...card}/>)}
        </div>
    );

}
export default MovieCardsFields;
