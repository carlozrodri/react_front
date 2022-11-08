import React, { Fragment } from "react";
// import { useContext, createContext } from 'react';

import NavBar from "../../Components/navbar/navbar";
import EmailBar from "../../Components/emailbar/emailbar";
import FooterBar from "../../Components/footer/footer";
import ItemList from "../../Components/itemlist/Itemlist";
import CardsChild from "../../Components/home/cards";
import CookieConsent from "react-cookie-consent";

const Home = (props) => {
  // const items = props.items;
  // console.log(props)
return (
    <Fragment>
      <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>

      <ItemList />
      <NavBar />
      {/* <CardsChild items={items} /> */}
      <EmailBar />
      <FooterBar />
    </Fragment>
  );
};

export default Home;
