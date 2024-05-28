import React from "react";
import "./stylesheet/task2.css"

const Task2 = () => {
    return (
        <div className="task">
            <div className="head">Rapid Quiz</div>
            <div class="info_box">
                <div class="info-title"><span>Instructions</span></div>
                <div class="info-list">
                    <div class="info">1. You will have only 15 seconds for each question.</div>
                    <div class="info">2. Once you select your answer, it can't be undone.</div>
                    <div class="info">3. You can't select any option once time goes off.</div>
                    <div class="info">4. You can't exit from the Quiz while you're playing.</div>
                    <div class="info">5. You'll get points on the basis of your correct answers.</div>
                </div>
                <div class="buttons">
                    {/* <button class="quit">Exit Test</button> */}
                    <a href="http://127.0.0.1:5500/Reaction_fronted/index.html"><button class="restart">Continue</button></a>
                </div>
            </div>
        </div>
    )
}

export default Task2;