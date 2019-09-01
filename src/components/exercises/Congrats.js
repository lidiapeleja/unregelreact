import "./Congrats.css";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";

const Congrats = (props) => (<nav className="container">
    <div className="congrats">
        <div className="animation animated bounceIn delay-1s "><h2>Congratulations!  😎</h2>
        <h4 className="displaypoints">Total of Points: {props.points}</h4>
        </div>
    </div>

</nav>)


export default Congrats;