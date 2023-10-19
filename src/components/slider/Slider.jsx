import { useNavigate } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import apiFilter, { category, movieType } from '../../api/apiFilter'
import './slider.scss'
import dayjs from 'dayjs'
import { AiFillStar } from 'react-icons/ai'

const Slider = ({ movies, mediaType }) => {

  const navigate = useNavigate()
  const carouselContainer = useRef(null);

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };


  return (
    <div className='slider'>
      <ContentWrapper>

        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />

        <BsFillArrowRightCircleFill
          className="carouselRighttNav arrow"
          onClick={() => navigation("right")}
        />

        <div className="sliderItems" ref={carouselContainer} >
          {movies?.map((movie) => (
            <div className="sliderItem" key={movie.id} >
              <div className="sliderImg" onClick={() => navigate(`/details/${mediaType}/${movie.id}`)}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                <div className='voteAverage'> <AiFillStar color='yellow' /> {movie.vote_average} / <span>10</span> </div>
              </div>
              <div className="sliderTitle">
                {movie.title || movie.name}
                <span>{dayjs(movie.release_date).format('YYYY')}</span>
              </div>
            </div>

          ))}
        </div>

      </ContentWrapper>
    </div>
  )
}

export default Slider