import React, { useState } from 'react'
import './heroItem.scss'
import { apiConfig } from '../../../../api/apiConfig'
import VideoPopup from '../../../../components/videoPopup/VideoPopup'
import apiFilter, { category } from '../../../../api/apiFilter'

const HeroItem = ({ movie }) => {

    const [show, setShow] = useState(false)
    const [trailer, setTrailer] = useState(null)
    
    const handleTrailer = async () => {
        const videos = await apiFilter.getVideos(category.movie, movie.id)
        const videoSrc = videos.results[0].key
        setShow(true)
        setTrailer(videoSrc)
    }

    return (
        <>
            <div className='heroItemContainer'>

                <div className="poster">
                    <img src={apiConfig.w500Image(movie.poster_path)} alt="" />
                </div>

                <div className="description">
                    <div className="title">{movie.title}</div>

                    <div className="overview"> {movie.overview} </div>

                 
                        <div className="trailerBtn" onClick={handleTrailer}>
                            <button>Watch Trailer</button>
                        </div>

                </div>

            </div>
            <VideoPopup
                show={show}
                setShow={setShow}
                trailer={trailer}
                setTrailer={setTrailer}
            />
        </>

    )
}

export default HeroItem