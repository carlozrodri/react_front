import {useEffect, useState, useRef} from 'react';
function List(){
 const [list, setList] = useState([]);
 useEffect(()=>{
    fetch('http://localhost:8000/api/')
  //fetch('https://amazfunels.herokuapp.com/api/')
    .then(response => response.json())
    .then(setList);
 }, []);
  
 return (
   <div>
      {list.map(todo => 
       <div key={todo.id}>
    
        <h2> Item :{todo.id}{todo.title}</h2>
       <h3>item_picture_link :{todo.item_pictures}</h3></div>)}
    </div>
  );
}
export default List;