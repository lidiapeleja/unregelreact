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
              <span role="img" aria-label="heart heart5"><FontAwesomeIcon icon={faHeart} size="1x" color="#FF0266" /></span>
              <span role="img" aria-label="heart heart4"><FontAwesomeIcon icon={faHeart} size="1x" color="#FF0266" /></span>
              <span role="img" aria-label="heart heart3"><FontAwesomeIcon icon={faHeart} size="1x" color="#FF0266" /></span>
              <span role="img" aria-label="heart heart2"><FontAwesomeIcon icon={faHeart} size="1x" color="#FF0266" /></span>
              <span role="img" aria-label="heart heart1"><FontAwesomeIcon icon={faHeart} size="1x" color="#FF0266" /></span>
            </div>
          </div>
};

export default Heart;
