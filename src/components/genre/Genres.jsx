import React, { useEffect, useState } from 'react'
import apiFilter, { category } from '../../api/apiFilter'

const Genres = ({ movie }) => {

    const [genres, setGenres] = useState([])

    useEffect(() => {
        const getGenres = async () => {

            const params = { page:1 }

            try {

                const results = await apiFilter.genre(category.movie, { params });
                setGenres(results.genres);

            } catch (error) {
                throw error;
            }
        }
        getGenres()
    }, [])

    return (
        <>
            {genres.map(genre => (

                {
                    ...movie.genre_ids && (movie.genre_ids.includes(genre.id)) ? (

                        <span className="genre" key={genre.id}>{genre.name}</span>

                    ) : (
                        <span key={genre.id}></span>
                    )
                }

            ))}
        </>
    )
}

export default Genres