import React from 'react';
import './Confirmation.css';
import Party from "./../../images/party.png";

function Confirmation() {
   const copyLink = () => {
     /* Get the text field */
     var transferLink = "https://nestlypaywaitlist-api.herokuapp.com";
     /* Copy the text inside the text field */
     navigator.clipboard.writeText(transferLink);
     /* Alert the copied text */
     alert("Copied the text: " + transferLink);
   };
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
        <button href='https://t.me/Nestlypay' className="joinUs">Join Our Community</button>
        <button onClick={copyLink} href='' className="share">Share to Your Friends</button>
      </div>
    </div>
  );
}

export default Confirmation;
