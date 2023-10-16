import React, { useEffect, useState } from 'react'
import apiFilter, { movieType, tvType } from '../../../api/apiFilter'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import Slider from '../../../components/slider/Slider'

const Popular = () => {

    const [movies, setMovies] = useState([])
    const [tvShows, setTvShows] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 }
            try {
                const response = await apiFilter.getMoviesList(movieType.popular, { params })
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
                const response = await apiFilter.getTvList(tvType.popular, { params })
                setTvShows(response.results)
            } catch (error) {
                throw error;
            }
        }
        getTv()
    }, [])


    return (
        <div className='sliderSection'>
            <ContentWrapper>
                <div className="title">Popular</div>

                <SwitchTabs />

                <Slider movies={movies} />

            </ContentWrapper>
        </div>
    )
}

export default Popular