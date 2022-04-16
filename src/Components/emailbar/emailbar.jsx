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
        alert("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Card.Body className="emailBar">
      <div className="login-box">
        <h2>Sign up to receive the best deals from TheTop8</h2>
        <form onSubmit={handleSubmit} className="sign-up-form">
          <div className="user-box">
            <input
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
           type="submit">Create</motion.button>
        </form>
      </div>
    </Card.Body>
  );
}

export default EmailBar;
