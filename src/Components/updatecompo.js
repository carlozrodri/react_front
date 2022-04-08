import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";
import AsyncSelect from "react-select/async";

function UpdateCompo() {
  // navbar
  // const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const url = "https://amazfunels.herokuapp.com/api/";
  // const customStyles = {
  //   menu: (provided, state) => ({
  //     ...provided,
  //     width: state.selectProps.width,
  //     borderBottom: '1px dotted pink',
  //     color: state.selectProps.menuColor,
  //     padding: 2,
  //   }),
  
  //   control: (_, { selectProps: { width }}) => ({
  //     width: width
  //   }),
  
  //   singleValue: (provided, state) => {
  //     const opacity = state.isDisabled ? 0.5 : 1;
  //     const transition = 'opacity 300ms';
  
  //     return { ...provided, opacity, transition };
  //   }
  // }
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(url)
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
          console.log(error);
        }
      );
  }, []);
  // handle input change event
  // const handleInputChange = (value) => {
  //   setValue(value);
  //   console.log(value);
  // };

  // handle selection
  const handleChange = (value) => {
    setSelectedValue(value);
  };
  /// load options
  const loadOptions = (inputValue) => {
    console.log(inputValue);
    return fetch(`${url}categorias/?search=${inputValue}`)
      .then((res) => res.json())
      .then();
  };

  // error catch

  useEffect(() => {
    if (selectedValue) {
      const getSearch = () => {
        fetch(`${url}?search=${selectedValue.name}`)
          .then((res) => res.json())
          .then((data) => setItems(data));
      };
      getSearch();
    }
  }, [selectedValue]);

  // cargando
  if (!isLoaded) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  // cargado
  else {
    
    return (
      <div>
        <AsyncSelect
          defaultOptions
          width="20"   // styles={customStyles}
          
          placeholder="Search..."
          value={selectedValue}
          getOptionLabel={(e) => e.name}
          loadOptions={loadOptions}
          // onInputChange={handleInputChange}
          onChange={handleChange}
        />

        <div className="contenido">
          {items.map((todo) => (
            <div key={todo.id} className="card">
              <Card.Body>
              <div className="contador"><p></p></div>
                <div>
                  <a href={todo.url_amazon}>
                    <Card.Img src={todo.item_pictures} />
                  </a>
                </div>
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
