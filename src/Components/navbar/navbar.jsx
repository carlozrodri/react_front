import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import logo from "./thetop8.png";
import "./navbar.css";
import NavButton from "./NavButton";
import React, { useState, useEffect, createContext, useContext } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import AsyncSelect from "react-select/async";
import { components } from "react-select";
import { customStyles } from "./barstyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import CardsChild from "../home/cards";



export default function NavBar(props) {
  const [selectedValue, setSelectedValue] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const history = useHistory();

  // const ThemeContext = createContext(items);
  // const useTheme = () => useContext(ThemeContext);
  
  const url = "https://amazfunels.herokuapp.com/api/";
  useEffect(() => {
    let baseUrl;
    let category = "";

    if (history?.location?.pathname?.split("/")[1]) {
      category = history?.location?.pathname?.split("/")[1];
      baseUrl = `${url}categorias/?search=${category}`;
    } else {
      baseUrl = url;
    }
    fetch(baseUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          setSelectedValue({ name: category });
        },
        (error) => {
          setIsLoaded(true);
          console.log(error);
        }
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    return fetch(`${url}categorias/?search=${inputValue}`)
      .then((res) => res.json())
      .then();
  };

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
      <>
        <Navbar>
          <Navbar.Brand href="/">
            <img src={logo} height="120" alt="logo" />
          </Navbar.Brand>
          <NavButton />
        </Navbar>
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
          onChange={handleChange}
        />
        {/* <CardsChild items={items} /> */}
      </>
    );
  }
}
