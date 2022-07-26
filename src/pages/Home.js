import React, { Fragment } from "react";
import NavBar from "../Components/navbar/navbar";
import UpdateCompo from "../Components/home/updatecompo";
import EmailBar from "../Components/emailbar/emailbar";
import FooterBar from "../Components/footer/footer";
import ItemList from "../Components/itemlist/Itemlist";
import CookieConsent from "react-cookie-consent";

const Home = () => {
  return (
    <Fragment>
      <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>

      <ItemList />
      <NavBar />
      <UpdateCompo />
      <EmailBar />
      <FooterBar />
    </Fragment>
  );
};

export default Home;
