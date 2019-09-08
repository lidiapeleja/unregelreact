import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRouter from "./components/AppRouter";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {faPoop} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {VERBS_ORDERED, WORDS_PER_POINT, REPETITIONS, INITIAL_HEARTS, lookupVerb} from "./config"

library.add(fab, faPoop, faHeart);

const MySwal = withReactContent(Swal);

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
        this.resetState = this.resetState.bind(this);
    }

    // Logics from VerbsMemory
    addVerb(routerHistory) {
        this.setState(state => {
            state.callCount = state.callCount + 1;
            if (state.callCount >= WORDS_PER_POINT * REPETITIONS) {
                routerHistory.replace("/exercises/fill");
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
                routerHistory.replace("/congrats");
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
        routerHistory.replace("/irregularverbs/memorize");
    }

    // from verbsFilling to
    goToTryAgain(routerHistory) {
        routerHistory.replace("/irregularverbs/try-again");
    }

    // from verbsFilling to
    youAreAwesome(routerHistory) {
        routerHistory.replace("/irregularverbs/verbcorrect");
    }

    // from Game over to Play Again

    startAgain(routerHistory) {
        console.log("startAgain() from lostHeart() has been called");
        routerHistory.replace("/loading");
        // this.setState(state => {
        //         state.currentVerbIdx = 0
        //     }
        // );
        // this.setState(state => {
        //         state.hearts = INITIAL_HEARTS
        //     }
        // );
    }

    // multiply index of verbs * 4 so you get the % for progress bar

    fromIndextoPercentage() {
        this.setState(state => ({
            percentage: ((state.currentVerbIdx + 1) / VERBS_ORDERED.length) * 100
        }));
    }

    loseHeart(routerHistory) {
        if (this.state.hearts <= 1) {
            MySwal.fire({
                type: 'warning',
                title: "GAME OVER",
                confirmButtonColor: '#ff0266',
                background: '#ffde03',
            });
            this.startAgain(routerHistory);
            console.log("startAgain() has been called");
            return;
        }  if (this.state.points >= 5) {
            this.setState(state => ({
                points: this.state.points - 5
            }));
            console.log("- 5 points");
        }
        this.setState(state => ({
            hearts: this.state.hearts - 1,
            }));
        console.log("-1 heart");
        return;
    };

    resetState() {
        this.setState(state => ({
            points: 0,
            callCount: 0,
            currentVerbIdx: 0,
            hearts: INITIAL_HEARTS,
            percentage: 1
        }));
    };


    render() {
        return (
            <div>
                <AppRouter
                    resetState={this.resetState}
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
                    startAgain={this.startAgain}
                />
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));
