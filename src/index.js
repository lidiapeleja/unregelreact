import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./components/AppRouter";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {faPoop} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {VERBS_ORDERED, WORDS_PER_POINT, REPETITIONS, INITIAL_HEARTS, lookupVerb} from "./config"
import createHistory from 'history/createBrowserHistory'

library.add(fab, faPoop, faHeart);

const MySwal = withReactContent(Swal)
const history = createHistory();

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            points: 0,
            callCount: 0,
            currentVerbIdx: 0,
            hearts: INITIAL_HEARTS,
            percentage: 1,
        };

        // verbs
        this.addVerb = this.addVerb.bind(this);
        this.incrementCurrentVerbIdx = this.incrementCurrentVerbIdx.bind(this);

        // points
        this.incrementPoint = this.incrementPoint.bind(this);
        this.addPoints = this.addPoints.bind(this);

        // routing
        this.goToNextPage = this.goToNextPage.bind(this);
        this.goToTryAgain = this.goToTryAgain.bind(this);

        //hearts
        this.loseHeart = this.loseHeart.bind(this);

        this.startAgain = this.startAgain.bind(this);
        this.fromIndextoPercentage = this.fromIndextoPercentage.bind(this);

        // game over
        this.alertExit = this.alertExit.bind(this);
    }

    // Logics from VerbsMemory
    addVerb(routerHistory) {
        this.setState(state => {
            state.callCount = state.callCount + 1;
            if (state.callCount >= WORDS_PER_POINT * REPETITIONS) {
                routerHistory.push("/exercises/fill");
                return;
            }

            if (state.verbs.newVerbs.length === 0) {
                // state.verbs = resetVerbs();
                this.incrementPoint();
                return state;
            }

            const verb = state.verbs.newVerbs.shift();
            state.verbs.initialVerbs.push(verb);

            state.verbs = {
                initialVerbs: state.verbs.initialVerbs,
                newVerbs: state.verbs.newVerbs
            };
            return state;
        });
    }

    incrementCurrentVerbIdx(routerHistory) {
        this.setState(state => {

            const nextVerbIdx = this.state.currentVerbIdx + 1;
            const nextVerb = lookupVerb(nextVerbIdx);

            if (!nextVerb) {
                routerHistory.push("/congrats");
                return {
                    currentVerbIdx: 1
                };
            }

            return {
                currentVerbIdx: nextVerbIdx
            }
        });
    }

    incrementPoint() {
        this.setState(state => ({
            points: this.state.points + 1
        }));
    }

    /*
     * logics from adding points when answer is correct in Filling Points
     */
    addPoints(points) {
        this.setState(state => ({
            points: this.state.points + points
        }));
    }

    // Logics from verbsfilling

    // from verbsFilling to
    goToNextPage(routerHistory) {
        routerHistory.push("/exercises/memorize");
    }

    // from verbsFilling to
    goToTryAgain(routerHistory) {
        routerHistory.push("/try-again");
    }

    // from verbsFilling to
    youAreAwesome(routerHistory) {
        routerHistory.push("/well-done");
    }

    // from Game over to Play Again

    startAgain(routerHistory) {
        this.setState(state => {
                state.currentVerbIdx = 0
            }
        );
        this.setState(state => {
                state.hearts = INITIAL_HEARTS
            }
        );
        routerHistory.push("/");
    }

    // multiply index of verbs * 4 so you get the % for progress bar

    fromIndextoPercentage() {
        this.setState(state => ({
            percentage: ((state.currentVerbIdx + 1) / VERBS_ORDERED.length) * 100
        }));
    }

    loseHeart(routerHistory) {
        if (this.state.hearts <= 1) {
            // alert("Game over! POINTS: " + this.state.points);
            MySwal.fire({
                type: 'warning',
                title: "GAME OVER",
                confirmButtonColor: '#ff0266',
                background: '#ffde03',
            });

            this.setState(state => ({
                points: 0,
            }));
            this.startAgain(routerHistory);
            return;
        } else {
            this.setState(state => ({
                hearts: this.state.hearts - 1,
            }));
        }
        if (this.state.points >= 5) {
            this.setState(state => ({
                points: this.state.points - 5
            }));
            console.log("this is the value for hearts: " + this.state.hearts);
        }
    };

    alertExit(routerHistory) {
        MySwal.fire({
            type: 'info',
            title: "Are you sure?",
            confirmButtonText: 'Yes',
            showCancelButton: true,
            background: '#ffde03',
            confirmButtonColor: '#ff0266'
        }).then((result) => {
            if (result.value) {
                this.setState(state => ({
                    points: 0,
                    callCount: 0,
                    currentVerbIdx: 0,
                    hearts: INITIAL_HEARTS,
                    percentage: 1
                }));
                // window.location.reload();
                // history.go(0);
                return;
            }
        });
    };


    render() {
        return (
            <div>
                <AppRouter
                    alertExit={this.alertExit}
                    currentVerb={lookupVerb(this.state.currentVerbIdx)}
                    points={this.state.points}
                    hearts={this.state.hearts}
                    incrementCurrentVerbIdx={this.incrementCurrentVerbIdx}
                    addVerb={this.addVerb}
                    addPoints={this.addPoints}
                    incrementPoint={this.incrementPoint}
                    goToNextPage={this.goToNextPage}
                    youAreAwesome={this.youAreAwesome}
                    goToTryAgain={this.goToTryAgain}
                    loseHeart={this.loseHeart}
                    percentage={this.state.percentage}
                    fromIndextoPercentage={this.fromIndextoPercentage}
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));
