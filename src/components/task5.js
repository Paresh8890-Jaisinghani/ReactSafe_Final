import React from "react";
import './stylesheet/task5.css'

const Task5 = () => {
    return (
        <div className="task">
        <div className="head">Obstacle Test</div>
            <div class="info_box">
                <div class="info-title"><span>Instructions</span></div>
                <div class="info-list">
                    {/* <div class="info">1. To start the game, click the "Start" button.</div> */}
                    <div class="info">1. Use the <b>left</b> and <b>right</b> arrow keys to switch lanes.</div>
                    <div class="info">3. There are three rounds of the test, each with a higher level of difficulty.</div>
                    <div class="info">2. The maximum score for each round is <b>15 car passes</b>.</div>
                    <div class="info">4. Earn points for each car passed safely without any collisions.</div>
                    <div class="info">5. Drive safely by anticipating car speed and distance. Have fun!</div>
                </div>
                <div class="buttons">
                    {/* <button class="quit">Exit Test</button> */}
                    <a href="http://127.0.0.1:5504/Task5Actual/index.html"><button class="restart">Continue</button></a>
                </div>
            </div>
        </div>
    )
}





export default Task5;