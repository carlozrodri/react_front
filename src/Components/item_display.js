import {useEffect, useState, useRef} from 'react';

import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, Card  } 
from "react-bootstrap";


function ItemDisplay(){
 const [list, setList] = useState([]);
 useEffect(()=>{
    fetch('https://amazfunels.herokuapp.com/api/')
  //fetch('https://amazfunels.herokuapp.com/api/')
    .then(response => response.json())
    .then(setList);
 }, []);
 return (   
    
  <div className='contenido'>
 {list.map(todo =>
<div key={todo.id} className='card'>
  <Card.Img src={todo.item_pictures} />
  <Card.Body>
    <Card.Title>{todo.title} </Card.Title>
    <Card.Text> {todo.item_description}</Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Buy it NOW! on Amazon.co.uk</small>
  </Card.Footer>
     </div>
     )}
  </div>
);
}
export default ItemDisplay;
 