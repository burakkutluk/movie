import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiFilter from '../../../api/apiFilter';
import { apiConfig } from '../../../api/apiConfig';
import './cast.scss'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const Cast = ({ movies }) => {

    const { category } = useParams()
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const res = await apiFilter.credits(category, movies.id);
            setCasts(res.cast.slice(0, 5));
        }
        getCredits();
    }, [category, movies.id]);

    console.log(casts);

    return (
        <div className="castsContainer">
            <ContentWrapper>
                <div className="casts">
                    {
                        casts.map((item, i) => (
                            <div key={i} className="castsItem">
                                <div className="castsItemImg">
                                    <img src={apiConfig.w500Image(item.profile_path)} alt="" />
                                </div>
                                <p className="castsItemName">{item.name}</p>
                            </div>
                        ))
                    }
                </div>

            </ContentWrapper>

        </div>
    )
}

export default Cast