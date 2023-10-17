import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import apiFilter, { category } from '../../api/apiFilter'
import dayjs from "dayjs";
import './search.scss'
import { AiFillStar } from 'react-icons/ai';
import Genres from '../../components/genre/Genres';

const Search = () => {

    const { query } = useParams()
    const [movies, setMovies] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getMovies = async () => {

            const params = { query }

            try {
                const searchMovie = await apiFilter.search(  { params });

                setMovies(searchMovie.results);

            } catch (error) {
                throw error;
            }
        }
        getMovies()
    }, [])


    return (
        <div className='searchContainer'>
            <ContentWrapper>
                <div className="searchResults">
                    <h1>Search Results</h1>
                    {movies.map(movie => (
                        <div className="searchResult" key={movie.id}>

                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=" " onClick={() => navigate(`/details/${movie.id}`)}/>

                            <div className="desc">
                                <div className="title">{movie.title || movie.name}
                                    <span className="date">{dayjs(
                                        movie?.release_date
                                    ).format("YYYY")}</span>
                                </div>

                                <div className="genreWrapper">
                                    <Genres  movie={movie} />                                  
                                </div>


                                <div className="vote"> <AiFillStar size={25} color='yellow' /> {movie.vote_average}</div>
                                <div className="overview">{movie.overview}</div>

                            </div>

                        </div>
                    ))}


                </div>
            </ContentWrapper >
        </div >
    )
}

export default Search