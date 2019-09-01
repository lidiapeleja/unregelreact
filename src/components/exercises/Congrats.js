import "./Congrats.css";
import React from "react";
import whatsapp from './whatsapp.svg';

// I need to mention author: https://www.flaticon.com/free-icon/whatsapp_134937

const Congrats = (props) => (<nav className="container">
    <div className="congrats">
        <div className="animation animated pulse infinite"><h2>Congratulations!</h2>
        <h4 className="displaypoints">Final Points: {props.points}</h4>
            <a className="whatsappshare" href="whatsapp://send?text=Hi! I just learned the 25 most important german irreglua UnregelApp helps everyone to learn the German irregular verbs - try it https://unregelapp.com " data-action="share/whatsapp/share">Share it<img className="whatsapp" src={whatsapp} alt="whatsapp" />
            </a>
        </div>
    </div>
</nav>)


export default Congrats;