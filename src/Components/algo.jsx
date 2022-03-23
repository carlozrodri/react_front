import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, Card } from 'react-bootstrap';
import AsyncSelect from 'react-select/async';

function UpdateCompo() {
  // navbar
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('');
  const [valornue, valorNuevo] = useState('');
  const [nuevalista, setList2] = useState('');
  const [newList, newList2] = useState('');

  // updatecompo
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);

  const [list, setList] = useState([]); // Aca recogeremos todos lo valores
  const [valueOptions, setValueOptions] = useState([]); // Aca se esperaran las opciones de categoria

  const url = 'https://amazfunels.herokuapp.com/api/'; // Esto ayuda por si cambiamos las base de la url y asi no tener que cambiar en todos lados la base

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (err) {
      return err;
    }
  };

  const getOptions = async () => {
    try {
      const { data } = await axios.get(`${url}categorias/`);
      return data;
    } catch (err) {
      return err;
    }
  };

  // handle input change event
  const handleInputChange = (value) => {
    valorNuevo(value);
    setValue(value);
  };

  // handle selection
  const handleChange = (value) => {
    setSelectedValue(value);
    setList2(value);
  };

  /// load options
  const loadOptions = (inputValue) => {
    return fetch(`${url}categorias/?search=${inputValue}`)
      .then((res) => res.json())
      .then();
  };

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setList(res);
        getOptions();
      })
      .then((resValue) => setValueOptions(resValue))
      .catch((err) => setError(err))
      .finally(() => setIsLoaded(false));
  }, []);

  return isLoaded ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error: {error.message}</div>
  ) : (
    <div>
      <AsyncSelect
        defaultOptions
        value={selectedValue}
        getOptionLabel={(e) => e.name}
        loadOptions={loadOptions}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />

      <pre>Selected Value1: {JSON.stringify(nuevalista.name || {}, null)}</pre>

      <div className='contenido'>
        {list.map((item) => (
          <div key={item.id} className='card'>
            <Card.Img src={item.item_pictures} />
            <Card.Body>
              <Card.Title>{item.title} </Card.Title>
              <Card.Text> {item.item_description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className='text-muted'>Buy it NOW! on Amazon.co.uk</small>
            </Card.Footer>
          </div>
        ))}
      </div>
    </div>
  );
}
export default UpdateCompo;
