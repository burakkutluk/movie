import React, { useEffect, useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Slider from '../../../components/slider/Slider'
import apiFilter from '../../../api/apiFilter'
import { useParams } from 'react-router-dom'
import './similar.scss'

const Similar = ({movies}) => {

    const {category} = useParams()
    const [items, setItems] = useState([])
    
    useEffect(()=> {
        const getSimilar = async () => {
            const response = await apiFilter.similar(category, movies)
            setItems(response.results)
        }
        getSimilar()
    },[movies])

    console.log(items);

  return (
    <div className='similar'>
        <ContentWrapper>
            <div className="item">
                <div className="title">Similar</div>
                <div className="list">
                    <Slider movies={items} mediaType={category}/>
                </div>
            </div>
        </ContentWrapper>
    </div>
  )
}

export default Similar