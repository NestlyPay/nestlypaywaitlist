import React from 'react';
import './Confirmation.css';
import Party from "./../../images/party.png";

function Confirmation() {
  return (
    <div className="alert animate-zoom">
      {/* <div className='cancel-container'>
          <span className="cancel">x</span>
        </div> */}
      <img src={Party} alt="" />
      <span className="title">Thank You</span>
      <span>Create and send invoices, manage your finance,</span>
      <span>track sales, and get paid faster.</span>
      <div className="buttonContainer">
        <button className="joinUs">Join Our Community</button>
        <button className="share">Share to Your Friends</button>
      </div>
    </div>
  );
}

export default Confirmation;
