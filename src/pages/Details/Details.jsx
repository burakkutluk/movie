import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './details.scss'
import DetailBanner from './detailBanner/DetailBanner'
import apiFilter, { category } from '../../api/apiFilter'
import Video from './video/Video'
import Similar from './similar/Similar'

const Details = () => {

  const { category, id } = useParams();

  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getDetail = async () => {
      const response = await apiFilter.detail(category, id, { params: {} });
      setMovies(response);
      window.scrollTo(0, 0);
    }
    getDetail();
  }, [category, id]);

  console.log(movies);

  return (
    <div className='detailContainer'>
      <DetailBanner movies={movies} />
      <Video movies={movies}/>
      <Similar movies={movies.id} />
    </div>
  )
}

export default Details