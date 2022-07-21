import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {  Card } from "react-bootstrap";
import { motion } from "framer-motion"
// import {  Card, CardGroup, Button  }
//         from "react-bootstrap";
import "./emailbar.css";

function EmailBar() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://amazfunels.herokuapp.com/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
      if (res.status === 201) {
        setEmail("");
        setMessage("User created successfully");
        alert("Thanks for Signing up");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (

    <div>
    <iframe 
src="https://rcm-eu.amazon-adsystem.com/e/cm?o=2&p=12&l=ur1&category=pw&banner=1XP978DSAQYXNWEKVMR2&f=ifr&linkID=e8a9f646624d52872ad9acc8a5468e5c&t=279200-21&tracking_id=279200-21" 
width="300" 
height="250" 
scrolling="no" 
border="0" 

sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"

/>
    <Card.Body className="emailBar">
      <div className="login-box">
        <h2>Sign up to receive the best deals from TheTop8</h2>
        <form onSubmit={handleSubmit} className="sign-up-form">
          <div className="user-box">
            <input
            className="is-invalid"
              type="text"
              name="email"
              placeholder="Email"
              required=""
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
   
          </div>
          <motion.button 
          whileHover={{ scale: 1.1}}
          whileTap={{ scale: 0.9 }}
           className="btn btn-primary" 
           type="submit">Sign Up</motion.button>
        </form>
      </div>
    </Card.Body>
    </div>
    
  );
}

export default EmailBar;
