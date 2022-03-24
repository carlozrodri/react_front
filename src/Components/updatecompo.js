import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";
import AsyncSelect from "react-select/async";
import { BrowserRouter as Router, Routes,
    Route, Link, NavLink } from "react-router-dom";
  
function UpdateCompo() {
  // navbar
  const [error, setError] = useState(null);

  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const url = 'https://amazfunels.herokuapp.com/api/'
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
          setIsLoaded(true);
          
          console.log(result);
        },
        // Nota: es importante manejar errores aquí y no en
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  // handle input change event
  const handleInputChange = (value) => {
    setValue(value);
  };

  
  // handle selection
  const handleChange = (value) => {
    setSelectedValue(value);
  };
  /// load options
  const loadOptions = (inputValue) => {
    console.log(inputValue);
    return fetch(
      `${url}categorias/?search=${inputValue}`
    )
      .then((res) => res.json())
      .then();
  };

  // error catch


useEffect(()=>{
const getSearch =()=>{
     fetch(
        `${url}?search=${selectedValue.name}`
      )
        .then((res) => res.json())
        .then((data) => setItems(data));
}
getSearch()
},[selectedValue])

  // cargando
  if (!items) {
    return <div>items cargados</div>
  }
  else if (!isLoaded) {
    return <div><h1>Loading...</h1></div>;
  } 

  // cargado
  else {
      
    return (
        
      <div>
        <AsyncSelect
        
          defaultOptions
          placeholder='Search...'
          value={selectedValue}
          getOptionLabel={(e) => e.name}
          loadOptions={loadOptions}
          onInputChange={handleInputChange}
          onChange={handleChange}
        />


        <div className="contenido">
          {items.map((todo) => (
            <div key={todo.id} className="card">
              <Card.Body >
              <div>
                <a href = {todo.url_amazon}>
                <Card.Img src={todo.item_pictures}/>
                </a>
                </div> 
                  
                <Card.Title>{todo.title} </Card.Title>
                <Card.Text> {todo.item_description }</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Buy it NOW! on Amazon.co.uk
                </small>
              </Card.Footer>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default UpdateCompo;
