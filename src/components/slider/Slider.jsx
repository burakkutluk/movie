import { useNavigate } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import apiFilter, { movieType } from '../../api/apiFilter'

const Slider = () => {

  const navigate = useNavigate()
  const carouselContainer = useRef(null);
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 }
      try {
        const response = await apiFilter.getMoviesList(movieType.popular, { params })
        setMovies(response.results)
        console.log(movies)
      } catch (error) {
        throw error;
      }
    }
    getMovies()
  }, [])

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

        <div className="carouselItems" ref={carouselContainer} >
          {movies.map((movie) => (
            <div className="carouselItem" key={movie.id} onClick={() => navigate(`/movie/${movie.id}`)}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
            </div>
          ))}

          <div className="carouselItem"></div>
          <div className="carouselItem"></div>
        </div>

      </ContentWrapper>
    </div>
  )
}

export default Slider