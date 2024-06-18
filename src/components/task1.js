import React from "react";
import "./stylesheet/task1.css";
import reaction from "./images/reaction1.mp4";

const Task1 = () => {
  return (
    <div className="task">
      <div className="head">Reaction Time Test</div>
      <div className="content-container">
        <div className="info-b0">
          <div className="info-title">
            <span>Instructions</span>
          </div>
          <div className="info-list">
            <div className="info">
              1. Wait for the background color to change.
            </div>
            <div className="info">
              2. Once the background turns <b>Green</b>, click the screen.
            </div>
            <div className="info">3. You have three chances for the test.</div>
            <div className="info">
              4. The average time taken will be your final test score.
            </div>
            <div className="info">
              5. Good luck, and try to react as quickly as possible!
            </div>
          </div>
          <div className="buttons">
            <a href="http://127.0.0.1:5500/Reaction_fronted/index.html">
              <button className="restart">Continue</button>
            </a>
          </div>
        </div>
        <div className="video-contain">
          <video
            className="video"
            src={reaction}
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
  );
};

export default Task1;
