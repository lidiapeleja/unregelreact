import React from "react";
import "./nav-counter-memorize.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const Navcountermemorize = (props) => {

    return (
        <div>
            <div id="nav-counter-memorize">
                <div id="bar-memorize" style={{width: `${(props.percentage)}%`}}>
                    <PercentageCircle/>
                </div>
            </div>
        </div>
    );
};

export default Navcountermemorize;