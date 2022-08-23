/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Logo from "./../../images/LOGO.png";
import "./waitlist.css";
import arrow from "./../../images/Vector (2).png";
import Card from "../Card/Card";
import send from "./../../images/SEND.png";
import file from "./../../images/FILE.png";
import track from "./../../images/Group (2).png";
import Confirmation from '../Alert/Confirmation';
import Axios from 'axios';
import validator from "validator";

function Waitlist() {
  setTimeout(function () {
    if (joined) {
      setjoined(false);
    }
  }, 10000);
  const [ValidationMessage, setError] = useState("");
  const [joined, setjoined] = useState(false);
   const closePopup = (e) => {
    setjoined(false);
  }
   const openPopup = (e) => {
     setjoined(true);
   };
  const url = "https://nestlypaywaitlist-api.herokuapp.com/api/mail";
  const emailurl = "https://nestlypaywaitlist-api.herokuapp.com/api/send-email";
  const [data, setData] = useState("");
  
   const form = useRef();
  function submit(e) {
    e.preventDefault();
    if (!validator.isEmail(data)) {
      setError("Enter valid Email!");
    } else {
      Axios.post(url, {
        email: data,
      }).then((res) => {
        console.log(res);
        setjoined(true);
       setError("");
        console.log("Thanks For Believing In Us");
      }, (error) => {
         
        setError("An Error Occured");
      });
       emailjs
         .sendForm(
           "service_frb4eji",
           "template_j4wu7fk",
           form.current,
           "zwtgweGQnL0X3CK0y"
         )
         .then(
           (result) => {
             console.log("send mail");
             console.log(result.text);
           },
           (error) => {
              console.log("Cant send mail");
             console.log(error.text);
           }
         );
      
     
    }
    }
  
  function handle(e) {
    // const newdata = {data}
    // newdata[e.target.id] = e.target.value
    setData(e.target.value);
    // setData(newdata)
  }

  return (
    <div>
      {joined ? (
        <div className="alert-background" onClick={closePopup}>
          <Confirmation onClick={openPopup} />
        </div>
      ) : (
        ""
      )}
      <div className="header">
        <a href="https://www.Nestlypay.com" target="_blank" rel="noreferrer">
          <img className="logo" src={Logo} alt="" />
        </a>
        <a href="https://t.me/Nestlypay" target="_blank">
          Join our Telegram
          <span>
            <img src={arrow} alt="" />
          </span>
        </a>
      </div>
      <div className="title-container">
        <div className="title-header">
          <span>Flexible Invoicing for</span>
          <span>Businesses</span>
        </div>
        <span className="sub-header hidden">
          Create and send invoices, manage your finance, track sales, and get
          paid faster.Be the first to know when we launch!
        </span>
        <div className="sub-header default-1">
          <span>
            Create and send invoices, manage your finance, track sales, and get
            paid faster.
          </span>
          <span>Be the first to know when we launch!</span>
        </div>
        <form ref={form} className="email" method="post" onSubmit={(e) => SubmitEvent(e)}>
          <div className="inputSide">
            <input
              type="email"
              onChange={(e) => handle(e)}
              id="email"
              name="email"
              required
              value={data.email}
              placeholder="Enter Your Email"
            />

            <span className="errorText">{ValidationMessage}</span>
          </div>
          <button type="submit" onClick={submit}>
            Join Waitlist
          </button>
        </form>
      </div>
      <div className="bgImageContainer">
        <div className="bigimage"></div>
      </div>
      <div className="title-container whyContainer">
        <div className="title-header title-Why">
          <span className="">Why Choose NestlyPay</span>
        </div>
        <div className="sub-header default-header">
          <span>
            Businesses can create invoices, send invoices and track sales with
            the
          </span>
          <span>
            NestlyPay experience system . Businesses can track their
            inventories,
          </span>
          <span>products and services.</span>
        </div>
        <div className="sub-header hidden-header">
          Businesses can create invoices, send invoices and track sales with the
          NestlyPay experience system . Businesses can track their inventories,
          products and services.
        </div>
      </div>
      <div className="cards">
        <Card
          image={file}
          detail="Follow up on customers with automated payment reminders and keep track of invoice status so you’ll never leave money off the table again."
          header="Create Invoice"
        />
        <Card
          image={send}
          detail="Reaching out to your customers as just gotten easier, guess what you can now send free invoices and get paid in the most simplest way."
          header="Send Invoice"
        />
        <Card
          image={track}
          detail="Follow up on customers with automated payment reminders and keep track of invoice status so you’ll never leave money off the table again."
          header="Track Sales"
        />
      </div>
      <div className="footer">
        <span>NestPay Limited 2022</span>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
}

export default Waitlist;
