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
                    <div class="info">1. Use the left and right arrow keys to switch lanes.</div>
                    <div class="info">2. Watch for cars, switch lanes quickly to avoid collisions ahead.</div>
                    <div class="info">3. There are three rounds to the test, each with a higher level of difficulty.</div>
                    <div class="info">4. Earn points for each car passed safely without any collisions.</div>
                    <div class="info">5. Drive safely by anticipating car speeds and distances. Have fun!</div>
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