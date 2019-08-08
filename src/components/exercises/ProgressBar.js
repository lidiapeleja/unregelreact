import React from "react";
import "./ProgressBar.css";
import {calcVerbImgSrc} from "../../utils/verbs-image";


const ProgressBar = (props) => {

    return (
        <div>
            <div id="progressbar">
                <div id="bar" width=
                    {`${(props.percentage)}%`}>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
