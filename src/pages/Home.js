import React, { Fragment } from 'react';
import NavBar from '../Components/navbar/navbar';
import UpdateCompo from '../Components/home/updatecompo';
import EmailBar from '../Components/emailbar/emailbar';
import FooterBar from '../Components/footer/footer';
import ItemList from '../Components/itemlist/Itemlist';

const Home = () => {
  return (
    <Fragment>
       <ItemList/>
      <NavBar />
      <UpdateCompo />
      <EmailBar />
      <FooterBar />
    </Fragment>
  );
};

export default Home;
