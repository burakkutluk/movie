import { useEffect, useState } from 'react'
import React from 'react'
import apiFilter, { movieType, tvType } from '../../../api/apiFilter'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import Slider from '../../../components/slider/Slider'

const Latest = () => {

    const [movies, setMovies] = useState([])
    const [tvShows, setTvShows] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 }
            try {
                const response = await apiFilter.getMoviesList(movieType.upcoming, { params })
                setMovies(response.results)
            } catch (error) {
                throw error;
            }
        }
        getMovies()
    }, [])

    useEffect(() => {
        const getTv = async () => {
            const params = { page: 1 }
            try {
                const response = await apiFilter.getTvList(tvType.on_the_air, { params })
                setTvShows(response.results)
            } catch (error) {
                throw error;
            }
        }
        getTv()
    }, [])

    console.log(tvShows);

    return (
        <div className='sliderSection'>
            <ContentWrapper>
                <div className="title">Latest</div>
                
                <SwitchTabs />

                <Slider movieType={movieType.latest} movies={movies} />

            </ContentWrapper>
        </div>
    )
}

export default Latest