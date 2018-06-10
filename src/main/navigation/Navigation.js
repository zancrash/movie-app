// Navigation.js

import React from 'react';
import './Navigation.css';
import Selection from './Selection';
import Slider from './Slider';

class Navigation extends React.Component {

    //fetch genres from themoviedb and store them in the state:
    componentDidMount() {
        const genresURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
        fetch(genresURL)
            .then(response => response.json())
            //pass data.genres as an argument to the setGenres method in the Main component:
            .then(data => this.props.setGenres( data.genres ))
            .catch(error => console.log(error))
    }
    
    render() {
        const { genre, genres, onGenreChange, onChange, year, rating, runtime } = this.props;
        return (
            <section className="navigation">
                <Selection
                    genre={genre}
                    genres={genres}
                    onGenreChange={onGenreChange}
                />

                <Slider data={year} onChange={onChange} />
                <Slider data={rating} onChange={onChange} />
                <Slider data={runtime} onChange={onChange} />

            </section>
        )
    }
}

export default Navigation;