import React from "react";
import './stylesheet/task3.css'

const Task3 = () => {
    return (
        <div className="task">
            <div className="head">Precision Timer</div>

            <div class="info_box">
                <div class="info-title"><span>Instructions</span></div>
                <div class="info-list">
                    <div class="info">1. Stop timer precisely at target time after start.</div>
                    <div class="info">2. Click the "Start Timer" button to begin the timer countdown.</div>
                    <div class="info">3.
                        Timer visible for 5 seconds, then hide, count internally &nbsp; after. </div>
                    <div class="info">4. Click "Stop Timer" at target time.</div>
                    <div class="info">5.
                        Score based on proximity to target time. Aim for precision.</div>
                </div>
                <div class="buttons">
                    {/* <button class="quit">Exit Test</button> */}
                    <a href="http://127.0.0.1:5502/Task3Actual/index.html"><button class="restart">Continue</button></a>
                </div>
            </div>
        </div>
    )
}

export default Task3;