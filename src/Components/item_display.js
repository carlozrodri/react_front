import {useEffect, useState, useRef} from 'react';
import {  Card, CardGroup, Container, Row, Col  } 
        from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";



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
    <small className="text-muted">Last updated 2 mins ago</small>
  </Card.Footer>


               {/* <h2> Item :{todo.id}{todo.title}</h2>
     <h3>item_picture_link :{todo.item_pictures}</h3> */}
     </div>
     )}
  </div>
);
}
export default ItemDisplay;
 