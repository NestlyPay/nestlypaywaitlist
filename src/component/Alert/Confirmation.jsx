import React from 'react';
import './Confirmation.css';
import Party from "./../../images/party.png";

function Confirmation() {
  
  const redirect = () => {
    window.location = "https://t.me/Nestlypay";
  }
  
   const copyLink = () => {
     var copyText = document.getElementById("link");
     copyText.select();
     copyText.setSelectionRange(0, 99999);
     navigator.clipboard.writeText(copyText.value);
     alert("Copied the Text", copyText.value);
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
        <button onClick={redirect} className="joinUs">
          Join Our Community
        </button>
        <button onClick={copyLink} href="" className="share">
          Share to Your Friends
        </button>
        <input
        className='link'
          type="text" id='link'
          value="https://nestlypaywaitlist-api.herokuapp.com"
        />
      </div>
    </div>
  );
}

export default Confirmation;