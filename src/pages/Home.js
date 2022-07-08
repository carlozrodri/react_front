import React, { Fragment } from 'react';
import NavBar from '../Components/navbar/navbar';
import UpdateCompo from '../Components/home/updatecompo';
import EmailBar from '../Components/emailbar/emailbar';
import FooterBar from '../Components/footer/footer';

const Home = () => {
  return (
    <Fragment>
      
      <NavBar />
      <UpdateCompo />
      <EmailBar />
      <FooterBar />
    </Fragment>
  );
};

export default Home;
