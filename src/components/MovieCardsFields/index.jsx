import React from 'react';
import MovieCard from '../MovieCard';

const MovieCardsFields = ({ mCards, onCardClick }) => {
    return (
        <div className="MovieContent">
            {mCards.map(card => (
                <MovieCard
                    key={card.id}
                    {...card}
                    onClick={() => onCardClick(card.id)}
                />
            ))}
        </div>
    );
};
export default MovieCardsFields;
