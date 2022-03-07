import React from "react";

import {  Card, CardGroup, Button  } 
        from "react-bootstrap";

  const FooterPage = () => {
  return ( 
    <div className="">
    <Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Sign up and get exclusive special deals</Card.Title>
    <Card.Text>
    <h9>*Emails submitted are subject to our Privacy Notice</h9>
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>    

  );
}

export default FooterPage;