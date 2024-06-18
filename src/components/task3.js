import React from "react";
import './stylesheet/task3.css'; // Ensure to use the correct CSS file path
import precision from './images/precision.mp4'; // Replace with your actual video import

const Task3 = () => {
    return (
        <div className="task">
            <div className="head">Precision Timer</div>

            <div className="content-container">
                <div className="info-bo">
                    <div className="info-title"><span>Instructions</span></div>
                    <div className="info-list">
                        <div className="info">1. Click the "Start Timer" button to start the countdown.</div>
                        <div className="info">2. The timer will be visible for the first <b>5 seconds</b>.</div>
                        <div className="info">3. After 5 seconds, the timer will be hidden but continue to <b>count in mind</b>.</div>
                        <div className="info">4. Click the "Stop Timer" button at the <b>target time of 10 seconds.</b></div>
                        <div className="info">5. Good luck and aim for precision!</div>
                    </div>
                    <div className="buttons">
                        <a href="http://127.0.0.1:5502/Precision_Fronted/index.html"><button className="restart">Continue</button></a>
                    </div>
                </div>
                <div className="video-container">
                    <video
                        className="video"
                        src={precision} // Replace with your video source
                        width="600"
                        height="300"
                        controls
                        autoPlay
                        muted
                    />
                    <p>We recommend that you look at the test demo.</p>
                </div>
            </div>
        </div>
    )
}

export default Task3;
