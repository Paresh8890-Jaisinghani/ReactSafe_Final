import React from 'react';
import MissionSection from './stylesheet/mission.js';
import OurCreativeMind from './stylesheet/creative.js';
import './stylesheet/last.css'
// import Contact from './stylesheet/message.js';
import Footer from './footer.js';
function LastPage() {

  return (
    <>
    <nav className="navbar">
        <h2 className="logo"><a href="/">ReactSafe</a></h2>
        <input type="checkbox" id="menu-toggler" />
        <label htmlFor="menu-toggler" id="hamburger-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18V11H3v2zm0-7v2h18V6H3z" />
          </svg>
        </label>
        <ul className="all-links">
          <li><a href="/">Home</a></li>
        </ul>
      </nav>
     <MissionSection/>
     <OurCreativeMind/>
     <Footer/>
     </>
  );
}

export default LastPage;
