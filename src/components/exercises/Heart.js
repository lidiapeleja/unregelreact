import React from "react";
import "./Heart.css";
import Points from "./Points.js";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import {INITIAL_HEARTS} from "../../config";



const Heart = (props) => {
    const hearts = Array.from({ length: props.hearts });
    const lostHearts = Array.from({ length: INITIAL_HEARTS - props.hearts });

    return (
        <div>
            <div className="container-heart">
                {
                    lostHearts.map(_ =>
                        (<span role="img" aria-label="heart" className="heart hiddingheart">
                            <FontAwesomeIcon icon={faHeart} size="1x"/>
                        </span>))
                }
                {
                    hearts.map(_ =>
                        (<span role="img" aria-label="heart" className="heart">
                            <FontAwesomeIcon icon={faHeart} size="1x"/>
                        </span>))
                }
            </div>
        </div>
    );

    /*    return (<div>
            <div className="container-heart">
                <span role="img" aria-label="heart" className="heart5 hiddingheart"><FontAwesomeIcon icon={faHeart}
                                                                                                     size="1x"/></span>
                <span role="img" aria-label="heart" className="heart4"><FontAwesomeIcon icon={faHeart} size="1x"/></span>
                <span role="img" aria-label="heart" className="heart3"><FontAwesomeIcon icon={faHeart} size="1x"/></span>
                <span role="img" aria-label="heart" className="heart2"><FontAwesomeIcon icon={faHeart} size="1x"/></span>
                <span role="img" aria-label="heart" className="heart1"><FontAwesomeIcon icon={faHeart} size="1x"/></span>
            </div>
        </div>)*/
};

export default Heart;
