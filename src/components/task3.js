import React from "react";
import './stylesheet/task3.css'

const Task3 = () => {
    return (
        <div className="task">
            <div className="head">Precision Timer</div>

            <div class="info_box">
                <div class="info-title"><span>Instructions</span></div>
                <div class="info-list">
                    <div class="info">1. Click the "Start Timer" button to start the countdown.</div>
                    <div class="info">2. The timer will be visible for the first <b>5 seconds</b>.</div>
                    <div class="info">3. After 5 seconds, the timer will be hidden but continue <div className="space">to <b>count internally</b>.</div> </div>
                    <div class="info">4. Click the "Stop Timer" button at the <b>target time</b>.</div>
                    <div class="info">5. Good luck and aim for precision!.</div>
</div>
                <div class="buttons">
                    {/* <button class="quit">Exit Test</button> */}
                    <a href="http://127.0.0.1:5502/Precision_Fronted/index.html"><button class="restart">Continue</button></a>
                </div>
            </div>
        </div>
    )
}

export default Task3;