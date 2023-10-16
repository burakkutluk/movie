import React, { useEffect, useState } from 'react'
import apiFilter, { movieType } from '../../../api/apiFilter'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import Slider from '../../../components/slider/Slider'

const Popular = () => {

    const [movies, setMovies] = useState([])

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

    return (
        <div className='popular'>
            <ContentWrapper>
                <div className="title">{movieType.popular}</div>
                <SwitchTabs />

                <Slider setMovies={setMovies} movies={movies}/>

            </ContentWrapper>
        </div>
    )
}

export default Popular