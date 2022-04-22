import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Button } from "react-bootstrap";
import AsyncSelect from "react-select/async";
import { components } from "react-select";
import { motion } from "framer-motion";
// import chroma from 'chroma-js';

//fortawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFontAwesome,
  faSearchengin,
  faAmazon,
} from "@fortawesome/free-brands-svg-icons";

import 'react-responsive-select/dist/react-responsive-select.css';

library.add(fas, faTwitter, faFontAwesome, faSearchengin);

// import { ColourOption, colourOptions } from '../data';
// import Select, { StylesConfig } from 'react-select';

function UpdateCompo() {
  // navbar
  // const [inputValue, setValue] = useState("");
  const [isShownHoverContent, setIsShownHoverContent] = useState(false);

  const [selectedValue, setSelectedValue] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const url = "https://amazfunels.herokuapp.com/api/";

  // props
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

  const DropdownIndicator = (props) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <FontAwesomeIcon icon={faSearchengin} />
        </components.DropdownIndicator>
      )
    );
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,

      fontSize: 18,
      border: state.isFocused ? 0 : 0,
      boxShadow: state.isFocused ? 0 : 0,
      cursor: "text",
      borderRadius: 10,
      borderBottom: "solid 1px",
    }),

    option: (styles, { isFocused }) => {
      return {
        ...styles,
        cursor: "pointer",
        backgroundColor: isFocused ? "white" : "white",
        color: isFocused ? "rgba(255, 80, 1086)" : "black",
        lineHeight: 2,
      };
    },

    input: (styles) => ({
      ...styles,
      color: "black",
      fontFamily: "arial",
    }),

    menu: (styles) => ({
      ...styles,
      marginTop: 0,
      boxShadow: "none",
      borderRadius: 0,
    }),

    singleValue: (styles) => ({
      ...styles,
      color: "rgba(255, 80, 86)",
    }),
  };
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
  // function FetchData() {
  //  const data = fetch(`${url}?search=${selectedValue.name}`)
  //         .then((res) => res.json())
  //         .then((data) => setItems(data));
  //         return (data);

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
          className="search-input"
          defaultOptions
          type="text"
          components={{ DropdownIndicator }}
          styles={customStyles}
          onMouseEnter={selectedValue}
   

          placeholder="Search..."
          value={selectedValue}
          getOptionLabel={(e) => e.name}
          loadOptions={loadOptions}
          // onInputChange={handleInputChange}
          onMouseOver={'lol'}
          onChange={handleChange}
        />

        <div className="contenido">
          {items.map((todo) => (
            <a className="card" href={todo.url_amazon}>
            <motion.div 
            
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 3 }}
            viewport={{ once: true }} 
            key={todo.id} 
            >

                <Card.Body>
                  <div className="contador">
                    <p></p>
                  </div>
                  <div>
                   
                      <Card.Img src={todo.item_pictures} />
                    
                  </div>
                  <Card.Text>{todo.title} </Card.Text>
                  <Card.Text> {todo.item_description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="btn btn-primary"
                      type="submit"
                    >
                      Check it NOW!
                    </motion.button>
                 
                  <br />
                  <FontAwesomeIcon icon={faAmazon} size="lg" />
                  <small className="text-muted">
                  {'  '}Amazon.co.uk
                  </small>
                 
                </Card.Footer>
    
            </motion.div>
            </a>
          ))}
        </div>
        
      </div>
    );
  }
}
export default UpdateCompo;
