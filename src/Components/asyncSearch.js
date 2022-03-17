import React, { useState, useEffect, useRef } from 'react';
import AsyncSelect from 'react-select/async';
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, Card  } from "react-bootstrap";

const data = []

function AsyncSearch() {
  /// navbar
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
///// 
  const [valornue, valorNuevo] = useState('');
  const [nuevalista, setList2] = useState('');
  const [newList, newList2] = useState('');


/////////
  const [list, setList] = useState([]);
useEffect(()=>{
  fetch('http://localhost:8000/api/')
  .then(response => response.json())
  .then(setList);
}, [])

// handle input change event
  const handleInputChange = value => {
    valorNuevo(value);
    setValue(value);
  };

// handle selection
  const handleChange = value => {
    setSelectedValue(value);
    setList2(value);
    
  }

const cargarOpciones = (inputValue) => {

  return fetch(`https://amazfunels.herokuapp.com/api/?search=${inputValue}`).then(function(response){ return response.json(); }).then(function(data) {
      const nuevalista3 = data;
      console.log(nuevalista3)
  })
  
}

console.log(cargarOpciones(selectedValue.name))

  // load options using API call
  const loadOptions = (inputValue) => {

    return fetch(`https://amazfunels.herokuapp.com/api/categorias/?search=${inputValue}`).then(res => res.json()).then();
  };

  return (
    <div className="App">
      <AsyncSelect
        defaultOptions
        value={selectedValue}
        getOptionLabel={e => e.name}
        loadOptions={loadOptions}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />

      <pre>Selected Value1: {JSON.stringify(nuevalista.name || {}, null)}</pre>    

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
    </div>

    
    
  );
}

export default AsyncSearch;