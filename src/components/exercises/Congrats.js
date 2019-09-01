import "./Congrats.css";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";

const Congrats = (props) => (<nav className="container">
    <div className="congrats">
        <div className="animation animated pulse infinite"><h2>Congratulations!  😎</h2>
        <h4 className="displaypoints">Total of Points: {props.points}        </h4>
            <a className="whatsappshare" href="whatsapp://send?text=Hi! I made it! UnregelApp helps everyone to learn the German irregular verbs - try it https://unregelapp.com " data-action="share/whatsapp/share">Share it via Whatsapp</a>
        </div>
    </div>

</nav>)


export default Congrats;