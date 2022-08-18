import React from "react";
import Logo from "./../../images/LOGO.png";
import "./waitlist.css";
import arrow from "./../../images/Vector (2).png";
import Card from "../Card/Card";
import send from "./../../images/SEND.png";
import file from "./../../images/FILE.png";
import track from "./../../images/Group (2).png";

function waitlist() {
  return (
    <div>
      {/* <div className="background">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div> */}
      <div className="header">
        <img className="logo" src={Logo} alt="" />
        <a href="#">
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
        <div className="email">
          <input type="text" placeholder="Enter Your Email" />
          <button>Join Waitlist</button>
        </div>
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
          detail="Reaching out to your customers as just gotten easier, guess what you can now send free invoices and get paid in the most simplest way."
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

export default waitlist;
