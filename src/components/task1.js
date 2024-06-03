import React from "react";
import "./stylesheet/task1.css"

const Task1 = () => {
    return (
        <div className="task">
            <div className="head">Reaction test</div>
            <div class="info_box">
                <div class="info-title"><span>Instructions</span></div>
                <div class="info-list">
                    <div class="info">1. Wait for the background color to change.</div>
                    <div class="info">2. Once the background turns green, click the screen.</div>
                    <div class="info">3. You have three chances for the test.</div>
                    <div class="info">4. The average time taken will be your final test score.</div>
                    <div class="info">5. Good luck, and try to react as quickly as possible!</div>
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