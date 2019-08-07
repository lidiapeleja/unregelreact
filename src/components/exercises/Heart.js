import React from "react";
import "./Heart.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
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
};

export default Heart;
