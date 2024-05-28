import React from 'react';
import './stylesheet/last.css'; // Import CSS

function LastPage() {
  // Function to handle returning to homepage
  const returnToHomepage = () => {
    // Redirect to homepage, change URL as needed
    window.location.href = '/';
  };

  return (
    <section className='lastpage'>

    <div className="last">
      <h1>Thank You for Visiting!</h1>
      <p>We appreciate your time on our website.</p>
      <button id="returnBtn" onClick={returnToHomepage}>
        Return to Homepage
      </button>
    </div>
    </section>
  );
}

export default LastPage;
