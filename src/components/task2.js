import React from "react";
import "./stylesheet/task2.css"

const Task2 = () => {
    return (
        <div className="task">
            <div className="head">Rapid Quiz</div>
            <div class="info_box">
                <div class="info-title"><span>Instructions</span></div>
                <div class="info-list">
                    <div class="info">1. You will have 15 seconds for each question.</div>
                    <div class="info">2. Once you select your answer, it can't be changed.</div>
                    <div class="info">3. You can't select any option once the time is up.</div>
                    <div class="info">4. You'll get points on the basis of your correct answers.</div>
                    <div class="info">5. Good luck! For the test.</div>
                </div>
                <div class="buttons">
                    {/* <button class="quit">Exit Test</button> */}
                    <a href="http://127.0.0.1:5501/Quiz_Fronted/index.html"><button class="restart">Continue</button></a>
                </div>
            </div>
        </div>
    )
}

export default Task2;