import React from "react";
import './stylesheet/task4.css'

const Task4 = () => {
    return (

        <div className="task">
            <div className="head">Traffic Light Simulation</div>
            <div class="info_box">
                <div class="info-title"><span>Instructions</span></div>
                <div class="info-list">
                    {/* <div class="info">1. To start the game, click the "Start" button.</div> */}
                    <div class="info">1. Lights cycle randomly: Red, Amber, Green. Wait for Green.</div>
                    <div class="info">2. Press spacebar quickly when Green light appears to measure reaction time.</div>
                    <div class="info">3. Earn one point for each correct spacebar press.</div>
                    <div class="info">4. 10 seconds for each round, final score shows Accuracy.</div>
                </div>
                <div class="buttons">
                    {/* <button class="quit">Exit Test</button> */}
                    <a href="http://127.0.0.1:5503/Task4Actual/index.html"><button class="restart">Continue</button></a>
                </div>
            </div>
        </div>
    )
}





export default Task4;