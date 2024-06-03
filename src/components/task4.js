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
                    <div class="info">1. Lights change at random: red, amber, and green.</div>
                    <div class="info">2. Press the spacebar or "click" button when the green light appears.</div>
                    <div class="info">3. Earn one point for each correct press or "click".</div>
                    <div class="info">4. Each round lasts for 10 seconds.</div>
                    <div class="info">5. Good luck and try to achieve the highest accuracy possible!</div>
                </div>
                <div class="buttons">
                    {/* <button class="quit">Exit Test</button> */}
                    <a href="http://127.0.0.1:5503/Light_Fronted/index.html"><button class="restart">Continue</button></a>
                </div>
            </div>
        </div>
    )
}





export default Task4;