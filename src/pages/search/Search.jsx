import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import apiFilter, { category } from '../../api/apiFilter'
import dayjs from "dayjs";
import './search.scss'
import { AiFillStar } from 'react-icons/ai';

const Search = () => {

    const { query } = useParams()
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])

    useEffect(() => {
        const getMovies = async () => {

            const params = { query }

            try {
                const searchMovie = await apiFilter.search(category.movie, { params });
                const searchTv = await apiFilter.search(category.tv, { params });

                const search = searchMovie.results.concat(searchTv.results);

                setMovies(search);

            } catch (error) {
                throw error;
            }
        }
        getMovies()
    }, [])

    useEffect(() => {
        const getGenres = async () => {

            const params = { query }

            try {

                const results = await apiFilter.genre(category.movie, { params });
                setGenres(results.genres);
                console.log(results);



            } catch (error) {
                throw error;
            }
        }
        getGenres()
    }, [])


    return (
        <div className='searchContainer'>
            <ContentWrapper>
                <div className="searchResults">
                    <h1>Search Results</h1>
                    {movies.map(movie => (
                        <div className="searchResult" key={movie.id}>

                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt=" " />

                            <div className="desc">
                                <div className="title">{movie.title || movie.name}
                                    <span className="date">{dayjs(
                                        movie?.release_date
                                    ).format("YYYY")}</span>
                                </div>

                                <div className="genreWrapper">
                                    {genres.map(genre => (

                                        {
                                            ...movie.genre_ids && (movie.genre_ids.includes(genre.id)) ? (

                                                <span className="genre" key={genre.id}>{genre.name}</span>

                                            ) : (
                                                <span key={genre.id}></span>
                                            )
                                        }

                                    ))}
                                </div>


                                <div className="vote"> <AiFillStar size={25} color='yellow' /> {movie.vote_average.toFixed(1)}</div>
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