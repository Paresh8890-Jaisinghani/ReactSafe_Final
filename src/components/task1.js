import React from "react";
import "./stylesheet/task1.css"

const Task1 = () => {
    return (
        <div className="task">
            <div className="head">Reaction test</div>
            <div class="info_box">
                <div class="info-title"><span>Instructions</span></div>
                <div class="info-list">
                    <div class="info">1. Press screen when background color changes.</div>
                    <div class="info">2. Click anywhere on blue screen when ready for test.</div>
                    <div class="info">3. Click quickly after background changes to green.</div>
                    <div class="info">4. You have three chances for the test.</div>
                    <div class="info">5. Average time taken is your final score for the test.</div>
                </div>
                <div class="buttons">
                    {/* <button class="quit">Exit Test</button> */}
                    <a href="http://127.0.0.1:5500/Reaction_fronted/index.html"><button class="restart">Continue</button></a>
                </div>
            </div>
        </div>
    )
}

export default Task1;