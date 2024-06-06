import React from 'react';
import reaction from './images/reaction.jpg'

import './stylesheet/home.css';

const Cover = () => {
    return (
        <>
        <div className="background">
          <div className="content">
            <h1 className="title">Reaction Time Test</h1>
            <a href='http://localhost:3000/task1'>
            <button className="continue-button">Continue</button>
            </a>    
          </div>
        </div>


<section className="col">


<div className="row">
<div className="col-lg-4 text-center">
  <img
    src={reaction}
    alt="Placeholder"
    className="bd-placeholder-img rounded-circle"
    width="140"
    height="140"
  />
  <h2 className="fw-normal">Heading</h2>
  <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
 
</div>
<div className="col-lg-4 text-center">
  <img
    src={reaction}
    alt="Placeholder"
    className="bd-placeholder-img rounded-circle"
    width="140"
    height="140"
  />
  <h2 className="fw-normal">Heading</h2>
  <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
  
</div>
<div className="col-lg-4 text-center">
  <img
   src={reaction}
    alt="Placeholder"
    className="bd-placeholder-img rounded-circle"
    width="140"
    height="140"
  />
  <h2 className="fw-normal">Heading</h2>
  <p>And lastly this, the third column of representative placeholder content.</p>
 
</div>
</div>
</section>
</>
      );
};

export default Cover;