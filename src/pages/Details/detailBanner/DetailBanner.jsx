import React, { useEffect, useState } from 'react'
import { apiConfig } from '../../../api/apiConfig'
import './banner.scss'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import dayjs from 'dayjs'
import { AiFillStar } from 'react-icons/ai'
import VideoPopup from '../../../components/videoPopup/VideoPopup'
import apiFilter, { category } from '../../../api/apiFilter'
import { useParams } from 'react-router-dom'
import Cast from '../cast/Cast'

const DetailBanner = ({ movies }) => {

  const { mediaType } = useParams()

  const [genre, setGenre] = useState([])
  const [show, setShow] = useState(false)
  const [trailer, setTrailer] = useState(null)

  const handleTrailer = async () => {

    if (movies.title) {
      const videos = await apiFilter.getVideos(category.movie, movies.id)
      const videoSrc = videos.results[0].key
      setShow(true)
      setTrailer(videoSrc)
    } else {
      const videos = await apiFilter.getVideos(category.tv, movies.id)
      const videoSrc = videos.results[0].key
      setShow(true)
      setTrailer(videoSrc)
    }

  }

  useEffect(() => {
    if (movies.genres) {
      setGenre(movies.genres)
    }
  }, [movies])


  genre.map((item) => (
    console.log(item.name)
  ))

  return (
    <>
      <div className='detailBannerContainer'>
        {movies && (
          <>
            <div className="detailImgContainer" key={movies.id}>
              <img src={apiConfig.originalImage(movies.backdrop_path || movies.poster_path)} alt="" />
            </div>
            <ContentWrapper>
              <div className="detailItemContainer">
                <div className="img">
                  <img src={apiConfig.w500Image(movies.poster_path)} alt="" />
                </div>

                <div className="items">
                  <div className="title">{movies.title || movies.name} <span>{dayjs(movies.release_date).format("YYYY")}</span></div>
                  <div className="tagline">{movies?.tagline}</div>

                  <div className="genre">
                    {genre.map((item) => (
                      <div className="genres" key={item.id}>{item.name}</div>
                    ))}
                  </div>

                  <div className="vote"><AiFillStar color='yellow' size={22} /> {movies.vote_average}  <span>/ 10</span> </div>
                  <div className="overview">{movies.overview}</div>

                  <div className="trailerBtn" onClick={handleTrailer}>
                    <button>Watch Trailer</button>
                  </div>


                  <div className="cast">
                    <Cast movies={movies} />
                  </div>

                </div>
              </div>
            </ContentWrapper>

          </>

        )}
        <div className="opacityLayer"></div>


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

export default DetailBanner