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
                    <div class="info">1. &nbsp;Use the <b>left</b> and <b>right</b> arrow keys to switch lanes.</div>
                    <div class="info">2. There are three rounds of the test, each with a higher <div className="space">level of difficulty.</div></div>
                    <div class="info">3. The maximum score for each round is <b>15 car passes</b>.</div>
                    <div class="info">4. Earn points for each car passed safely without any <div className="space">collisions.</div></div>
                    <div class="info">5. Drive safely by anticipating car speed and distance. <div className="space">Have fun!</div></div>
                </div>
                <div class="buttons">
                    {/* <button class="quit">Exit Test</button> */}
                    <a href="http://127.0.0.1:5504/Obstacle_Fronted/index.html"><button class="restart">Continue</button></a>
                </div>
            </div>
        </div>
    )
}





export default Task5;