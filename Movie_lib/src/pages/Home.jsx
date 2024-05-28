import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard";

import './MovieGrid.css'

const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

//mostra os 20 melhores filmes 
const Home = () => {
    const[topMovies, settopMovies] = useState([]);

    const getTopRatedMovies = async (URL) => {

        const res = await fetch(URL);
        const data = await res.json();

        settopMovies(data.results);
    };

    useEffect(() => {

        const topRatedURL = `${moviesURL}top_rated?${apikey}`;

        getTopRatedMovies(topRatedURL);

    }, [])

    return(
        <div className="container">
            <h2 className="title">Melhores Filmes:</h2>
            <div className="movie_container">
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Home