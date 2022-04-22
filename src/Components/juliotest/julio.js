import "./julio.css";
import React, { useState } from 'react';
function JulioTest(props) {
  // const getSearch = document.getElementById('id').style.backgroundColor = 'green' ;
  const [isShownHoverContent, setIsShownHoverContent] = useState(false);

    return ( 
      <div className="App">
      <button
        onMouseEnter={() => setIsShownHoverContent(true)}
        onMouseLeave={() => setIsShownHoverContent(false)}>
        Hover!
      </button>
      {isShownHoverContent && (
        <div>
          It works..!
        </div>
      )}
    </div>
     );
}

export default JulioTest;
