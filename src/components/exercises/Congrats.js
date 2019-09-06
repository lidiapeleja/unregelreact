import "./Congrats.css";
import React from "react";

const Congrats = (props) => (<div className="container-fluid p-0 congrats">
        <h2 className="animation animated fadeIn"> First round compleated </h2>
            <h4 className="displaypoints">Final Result: {props.points} points </h4>
            <a type="submit" className="btn whatsappshare textbutton nonactiv animated fadeIn delay-2s" href="whatsapp://send?text= Hey! 🏆 I just learnt the 25 most important german irregular verbs with UnregelApp! Try it ➡️ https://unregelapp.com " data-action="share/whatsapp/share">Share it on Whatsapp</a>
            <a type="submit" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Funregelapp.com" target="_blank" rel="noopener" className="btn facebookshare textbutton nonactiv animated fadeIn delay-2s">Share it on Facebook</a>
            <a type="submit" className="btn twittershare textbutton nonactiv animated fadeIn delay-2s" href="https://twitter.com/share?url=https%3A%2F%2Funregelapp.com%2F&text=I just learnt the 25 most important german irregular verbs with UnregelApp ! Try it ➡ ️">Share it on Twitter</a>
    </div>
);


export default Congrats;