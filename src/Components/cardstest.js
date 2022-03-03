import React from 'react';

import {  Card, CardGroup, Row  } 
        from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
  
const TarjetasComponent = () => {
    return (
    <div>
    <CardGroup> 
        
    <Card className="lol"
    border="info" >
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
        <Card.Title>Card title 1</Card.Title>
        <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
        </Card.Text>
    </Card.Body>
    <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
    </Card>
    <Card className="lol">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
        <Card.Title>Card title 2</Card.Title>
        <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
        </Card.Text>
    </Card.Body>
    <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
    </Card>
    <Card className="lol">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
        <Card.Title>Card title 3</Card.Title>
        <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
        </Card.Text>
    </Card.Body>
    <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
    </Card>

</CardGroup>
<CardGroup>
<Card className="lol">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
    <Card.Title>Card title 4</Card.Title>
    <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
    </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
</Card>
<Card className="lol">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
    <Card.Title>Card title 5</Card.Title>
    <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
    </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
</Card>
<Row className="justify-content-center">
<Card className="lol">
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
    <Card.Title>Card title 6</Card.Title>
    <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
    </Card.Text>
    </Card.Body>
    <Card.Footer>
    <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
</Card>
</Row>
</CardGroup>
</div>
)
}
export default TarjetasComponent;