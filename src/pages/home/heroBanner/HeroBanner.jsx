import React, { useEffect, useState } from 'react'
import apiFilter from '../../../api/apiFilter'
import { movieType, category } from '../../../api/apiFilter'
import './heroBanner.scss'
import { apiConfig } from '../../../api/apiConfig'
import HeroItem from './heroItem/HeroItem'

const HeroBanner = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 }
            try {
                const response = await apiFilter.getMoviesList(movieType.popular, { params })
                setMovies(response.results.slice(0,1))
                console.log(response.results)
            } catch (error) {
                throw error;
            }
        }
        getMovies()
    }, [])

    return (
        <div className='heroBanner' >
            {movies.map((movie) => (
                <div className="heroBannerImgContainer" key={movie.id}>
                    <img src={apiConfig.w500Image(movie.backdrop_path)} alt="" />
                </div>
            ))}
            <div className="opacityLayer"></div>

            {movies.map((movie) => (
                <div className="heroItem" key={movie.id}>
                    <HeroItem movie={movie} />
                </div>
            ))}

        </div>
    )
}

export default HeroBanner