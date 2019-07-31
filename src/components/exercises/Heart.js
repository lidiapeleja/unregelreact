import React from "react";
import "./Heart.css";
import Points from "./Points.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const Heart = (props) => {
  return <div>
            <div className="container-heart">
              <span role="img" aria-label="heart" className="heart5"><FontAwesomeIcon icon={faHeart} size="1x" color="#FF0266" /></span>
              <span role="img" aria-label="heart" className="heart4"><FontAwesomeIcon icon={faHeart} size="1x" color="#FF0266" /></span>
              <span role="img" aria-label="heart" className="heart3"><FontAwesomeIcon icon={faHeart} size="1x" color="#FF0266" /></span>
              <span role="img" aria-label="heart" className="heart2 "><FontAwesomeIcon icon={faHeart} size="1x" color="#FF0266" /></span>
              <span role="img" aria-label="heart" className="heart1 hiddingheart "><FontAwesomeIcon icon={faHeart} size="1x" /></span>
            </div>
          </div>
};

export default Heart;
