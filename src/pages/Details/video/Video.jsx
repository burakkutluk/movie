import React from 'react'
import { useState, useEffect } from 'react';
import './video.scss'
import apiFilter from '../../../api/apiFilter';
import { useParams } from 'react-router-dom';
import VideoShow from './VideoShow';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const Video = ({ movies }) => {

    const { category } = useParams();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            const res = await apiFilter.getVideos(category, movies.id);
            setVideos(res.results.slice(1, 3));
        }
        getVideos();
    }, [category, movies.id]);

    return (
        <>
            <ContentWrapper>
                <div className='video'>
                    {
                        videos.map((item, i) => (
                            <VideoShow key={i} item={item} />
                        ))
                    }
                </div>
            </ContentWrapper>

        </>

    )
}

export default Video