import "./Congrats.css";
import React from "react";

const Congrats = (props) => (<div className="container-fluid p-0 congrats">
        <h1 className="animated fadeIn">🎉</h1>
        <h2 className="animation animated fadeIn delay-2s"> First round completed</h2>
            <h4 className="displaypoints animated fadeIn delay-3s">Final Result: {props.points} points</h4>
            <a type="submit" className="btn whatsappshare textbutton nonactiv animated fadeIn delay-4s" href="whatsapp://send?text= Hey! 🏆 I just learnt the 25 most important german irregular verbs with UnregelApp! Try it ➡️ https://unregelapp.com " data-action="share/whatsapp/share">Share it on Whatsapp</a>
            <a type="submit" className="btn facebookshare textbutton nonactiv animated fadeIn delay-4s" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Funregelapp.com" target="_blank" rel="noopener">Share it on Facebook</a>
            <a type="submit" className="btn twittershare textbutton nonactiv animated fadeIn delay-4s" href="https://twitter.com/share?url=https%3A%2F%2Funregelapp.com%2F&text=I just learnt the 25 most important german irregular verbs with UnregelApp ! Try it ➡ ️">Share it on Twitter</a>
    </div>
);


export default Congrats;