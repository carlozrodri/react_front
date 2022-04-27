import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";
import AsyncSelect from "react-select/async";
import { components } from "react-select";
import { motion } from "framer-motion";
import {customStyles} from "./barstyles";
import Child from '../../App';

// import chroma from 'chroma-js';
// import FetchData2 from "../data/data";
//fortawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearchengin,
  faAmazon,
} from "@fortawesome/free-brands-svg-icons";


function UpdateCompo() {

  const [selectedValue, setSelectedValue] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const url = "https://amazfunels.herokuapp.com/api/";
 



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
          <FontAwesomeIcon icon={faSearchengin} size="2xl" />
        </components.DropdownIndicator>
      )
    );
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


        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 3 }}
          viewport={{ once: true }}
        >
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
            onMouseOver={"lol"}
            onChange={handleChange}
          />
        </motion.div>
        <div className="contenido">
          {items.map((todo) => (
            <a className="card" href={todo.url_amazon}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
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
                  <small className="text-muted">{"  "}Amazon.co.uk</small>
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
