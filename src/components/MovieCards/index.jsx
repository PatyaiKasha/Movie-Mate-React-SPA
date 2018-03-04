import React from 'react';
import MovieCard from '../MovieCard';

const MovieCards = props => {
    return (
        <div className="MovieContent">
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </div>
    );
};

export default MovieCards;