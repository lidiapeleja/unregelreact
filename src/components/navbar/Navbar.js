import "./Navbar.css";
import React from "react";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {withRouter} from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

library.add(faTimes);

const MySwal = withReactContent(Swal);

const Navbar = withRouter((props) => (<nav className="navbar">
    <div className="navbar-brand logo"><a href="https://unregelapp.com/"><h1 className="logoh1">UnregelApp</h1><h6
        className="logoh6">Lern by Playing</h6></a></div>
    <div className="navbar-brand newgame" onClick={() => alertNewGame(props.resetState, props.history)}>New Game</div>
    <div className="navbar-brand restart" onClick={() => alertQuit(props.resetState, props.history)}>Quit</div>
</nav>));


function alertQuit(resetState, routerHistory) {
    MySwal.fire({
        title: "Are you sure <br> you want to Quit?",
        text: "All current progress will be lost",
        confirmButtonText: 'Quit',
        showCancelButton: true,
        background: '#ffde03',
        confirmButtonColor: '#ff0266'
    }).then((result) => {
            if (result.value) {
                resetState();
                window.location.href = 'https://unregelapp.com' ;
            }
        }
    );
}


function alertNewGame(resetState, routerHistory) {
    MySwal.fire({
        title: "Are you sure <br> you want a New Game?",
        text: "All current progress will be lost",
        confirmButtonText: 'New Game',
        showCancelButton: true,
        background: '#ffde03',
        confirmButtonColor: '#ff0266'
    }).then((result) => {
            if (result.value) {
                resetState();
                routerHistory.push('/loading');
            }
        }
    );
}

export default Navbar;

