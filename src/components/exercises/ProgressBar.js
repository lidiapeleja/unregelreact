import React from "react";
import "./ProgressBar.css";


const ProgressBar = (props) => {

    return (
        <div>
            <div id="progressbar">
                <div id="bar" style={{width: `${(props.percentage)}%`}}>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
