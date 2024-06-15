import React from 'react';
import work from './images/work.png'
import score from './images/score.png'
import intro from './images/intro.png'
import './stylesheet/reaction.css';
import sample from './images/reaction1.mp4'
import { Link } from 'react-router-dom';


const Reaction = () => {
    return (
        <>
       <div className="background">
          <div className="content">
            <h1 className="title">Reaction Time Test</h1>
            {/* <a href='http://localhost:3000/task1'>
            <button className="continue-button">Continue</button>
            </a>     */}
          </div>
        </div>

<div className="col">
<div className="row">
      <div className="col-lg-4 d-flex flex-column align-items-center  text-center">
        <img
          src={score}
          alt="Placeholder"
          className="bd-placeholder-img rounded-circle"
          width="140"
          height="140"
        />
        <h2 className="fw-normal mt-4">About</h2>
        <p>Test and improve your driving reflexes with our interactive, fun, and engaging reaction time test.</p>
       
      </div>
      <div className="col-lg-4 d-flex flex-column align-items-center text-center">
        <img
          src={work}
          alt="Placeholder"
          className="bd-placeholder-img rounded-circle"
          width="140"
          height="140"
        />
        <h2 className="fw-normal mt-4">Test</h2>
        <p>Measure your reaction time by clicking quickly when a visual signal appears. Track and improve your reflexes.</p>
       
      </div>
      <div className="col-lg-4 d-flex flex-column align-items-center text-center">
        <img
          src={intro}
          alt="Placeholder"
          className="bd-placeholder-img rounded-circle"
          width="140"
          height="140"
        />
        <h2 className="fw-normal mt-4">Feedback</h2>
        <p>Get personalized feedback on your reaction time. Improve your driving reflexes for safer and more responsive driving.</p>
      </div>
    </div>
</div>

<div className='vid'>
  <div className="center">
<video src={sample} width="600" height="300" controls="controls" autoplay="true" muted = "true" />
<p>We recommend that you look at the test demo.</p>
  </div>

</div>


<div className='next'>

<Link to='/task1' className='btn'>Continue</Link>

  </div>    

<footer>
        <div>
            <span>Copyright © 2024 All Rights Reserved</span>
            <span className="link">
                <a href="/">Home</a>
            </span>
        </div>
    </footer>
</>
      );
};

export default Reaction;