import axios from 'axios';
import React from 'react';
import "./Movie.css";

interface State {
    isLoading?: boolean;
    movies?: any
}

function Movie(movie: MovieProps) {
    return <div className="movie">
        <img src={movie.medium_cover_image} alt={movie.title} title={movie.title}/>
        <div className="movie__data">
            <h3 className="movie__title">{movie.title}</h3>
            <h5 className="movie__year">{movie.year}</h5>
            <ul className="movie__genres">{movie.genres.map((genre: string) =>
                <li className="genres__genre">
                    {genre}
                </li>
            )}
            </ul>
            <p className="movie__summary">{movie.summary.slice(0,180)}...</p>
        </div>
    </div>;
}

class MovieProps {
    id: number;
    year: number;
    title: string;
    summary: string;
    medium_cover_image: string;
    genres: Array<string>;

    constructor(id: number, year: number, title: string, summary: string, medium_cover_image: string, genres:Array<string>) {
        this.id = id;
        this.year = year;
        this.title = title;
        this.summary = summary;
        this.medium_cover_image = medium_cover_image;
        this.genres = genres;
    }
}

class App extends React.Component<State> {
    state: State = {
        isLoading: true,
        movies: []
    }

    getMovies = async () => {
        const {
            data: {
                data: { movies }
            }
        } = await axios.get("https://yts.mx/api/v2/list_movies.json");
        this.setState({movies: movies, isLoading: false});
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return <section className="container">
            {isLoading ?
                <div className="loader">
                    <span className="loader__text">Loading...</span>
                </div> : (
                    <div className="movies">
                        {
                            movies.map((movie: MovieProps) => (
                                <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title}
                                       summary={movie.summary} medium_cover_image={movie.medium_cover_image} genres={movie.genres}/>
                            ))
                        }
                    </div>
                )}
        </section>;
    }
}

export default App;
