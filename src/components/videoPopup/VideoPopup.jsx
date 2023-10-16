import React from 'react'
import './video.scss'
import ReactPlayer from 'react-player/youtube';
import { apiConfig } from '../../api/apiConfig';
import apiFilter, { category } from '../../api/apiFilter';

const VideoPopup = ({ show, setShow, trailer, setTrailer }) => {

    const hidePopup = () => {
        setShow(false);
        setTrailer(null);
    };

    return (
        <div className={`videoPopup ${show ? "visible" : ""}`}>
            <div className="opacityLayer" onClick={hidePopup}></div>
            <div className="videoPlayer">
                <span className="closeBtn" onClick={hidePopup}>
                    Close
                </span>

                    <ReactPlayer
                        url={'https://www.youtube.com/embed/'+ trailer}
                        controls
                        width="100%"
                        height="100%"
                    //  playing={true}
                    />
                

            </div>
        </div>
    )
}

export default VideoPopup