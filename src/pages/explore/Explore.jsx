import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './explore.scss'
import SideBar from '../../components/sidebar/SideBar'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import apiFilter, { category, movieType, tvType } from '../../api/apiFilter'

const Explore = () => {

  const { mediaType } = useParams();

  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      let response = null
      const params = {}
      if (mediaType == 'movie') {
        response = await apiFilter.getMoviesList(movieType.upcoming, { params });

      } else if (mediaType == 'tvshow') {
        response = await apiFilter.getTvList(tvType.popular, { params });

      }
      setMovies(response.results);
      setTotalPage(response.total_pages);
    }
    getMovies()
  }, [mediaType])



  const loadMore = async () => {
    const params = {
      page: page + 1
    };
    let response = null
    if (mediaType == "movie") {
      response = await apiFilter.getMoviesList(movieType.upcoming, { params });
    }
    else {
      response = await apiFilter.getTvList(tvType.popular, { params });
    }

    setMovies([...movies, ...response.results]);
    setPage(page + 1);
  }

  return (
    <div className='exploreContainer'>
      <ContentWrapper>

        <div className="main">
          <SideBar />
          <div className="cardGrid">
            <h1>Explore {mediaType}</h1>

            <div className="cardItem">
              {movies.map((movie) => (
                <div className='movieItem' key={movie.id}>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" onClick={() => navigate(`/details/${movie.id}`)} />
                  <div className='movieTitle'>{movie.title || movie.name}</div>
                </div>
              ))}


            </div>

          </div>
          {
            page < totalPage ? (
              <div className="movieLoadmore">
                <button className="more" onClick={loadMore}>Load more</button>
              </div>
            ) : null
          }
        </div>
      </ContentWrapper>

    </div>
  )
}

export default Explore