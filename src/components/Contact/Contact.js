import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import contact from "../../images/contact.svg";

const Contact = () => {
  return (
   
      <div className="contact-page">

        <div className="contact-left">
          <img src={contact} alt="" />
        </div>

        <div className="contact-right">
          <form action="">
           
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
      

            <input type="text" placeholder="Subject" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>

            <Link type="button" className="product-btn">
              Submit
            </Link>
          </form>
        </div>
 
    </div>
  );
};

export default Contact;
