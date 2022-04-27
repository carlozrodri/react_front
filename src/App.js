// Import React
import React, { Component, createContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import NavBar from "./Components/navbar/navbar";
import UpdateCompo from "./Components/home/updatecompo";
import EmailBar from "./Components/emailbar/emailbar";
import FooterBar from "./Components/footer/footer";
import JulioTest from "./Components/juliotest/julio";

// App Component

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>
        <NavBar />
        <UpdateCompo />
        <EmailBar />
        <FooterBar />
      </div>
    </Router>
  );
}

function Child() {
  const { id } = useParams();
  const context = createContext(id);
  const url = "https://amazfunels.herokuapp.com/api/";
console.log(typeof id)
  fetch(`${url}?search=${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });

  return (
    <div>
      <h2>{id}</h2>
    </div>
  );
}
