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
    <div className="navbar-brand restart" onClick={() => alertReset(props.resetState, props.history)}>Restart</div>
</nav>));


function alertReset(resetState, routerHistory) {
    MySwal.fire({
        title: "Are you sure that you want to Restart?",
        text: "All current progress will be lost",
        confirmButtonText: 'Restart',
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


function alertNewGame(resetState, routerHistory) {
    MySwal.fire({
        title: "Are you sure that you want to play a New Game?",
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

