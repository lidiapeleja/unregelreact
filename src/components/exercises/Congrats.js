import "./Congrats.css";
import React from "react";
import whatsapp from './whatsapp.svg';

// I need to mention author: https://www.flaticon.com/free-icon/whatsapp_134937

const Congrats = (props) => (<nav className="container">
    <div className="congrats">
        <div className="animation animated pulse infinite"><h2> 🎈💥 Congratulations! 💥🎈</h2>
        <h4 className="displaypoints">Final Points: {props.points} </h4>
        </div>
        <a className="whatsappshare" href="whatsapp://send?text= Hey! 🏆 I just learnt the 25 most important german irregular verbs with UnregelApp! Try it ➡️ https://unregelapp.com " data-action="share/whatsapp/share">Share it<img className="whatsapp" src={whatsapp} alt="whatsapp" />
        </a>
    </div>
</nav>)


export default Congrats;