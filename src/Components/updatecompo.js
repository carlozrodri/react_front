import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";
import AsyncSelect from "react-select/async";

function UpdateCompo() {
  // navbar
  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://amazfunels.herokuapp.com/api/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Nota: es importante manejar errores aquí y no en
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          setIsLoaded(true);
          console.log(error)
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
      `https://amazfunels.herokuapp.com/api/categorias/?search=${inputValue}`
    )
      .then((res) => res.json())
      .then();
  };

  // error catch


useEffect(()=>{
const getSearch =()=>{
     fetch(
        `https://amazfunels.herokuapp.com/api/?search=${selectedValue.name}`
      )
        .then((res) => res.json())
        .then((data) => setItems(data));
}
getSearch()
},[selectedValue])

  // cargando
  if (!isLoaded) {
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
              <Card.Img src={todo.item_pictures} />
              <Card.Body>
                <Card.Title>{todo.title} </Card.Title>
                <Card.Text> {todo.item_description}</Card.Text>
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
