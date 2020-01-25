import React, { useState } from 'react';
import './App.css';

function App() {

  const [color, setColor] = useState('salmon');

  const handleColor = event => {
    setColor(`blue`)
    console.log(event.target)
    event.target.style.backgroundColor = color
  }

  return (
    <div className="App">
      <div className="flex-grid-thirds">
        <div className="col" id="1" onClick={handleColor} >1</div>
        <div className="col" id="2" onClick={handleColor} >2</div>
        <div className="col" id="3" onClick={handleColor} >3</div>
      </div>
      <div className="flex-grid-thirds">
        <div className="col" id="4" onClick={handleColor} >4</div>
        <div className="col" id="5" onClick={handleColor} >5</div>
        <div className="col" id="6" onClick={handleColor} >6</div>
      </div>
      <div className="flex-grid-thirds">
        <div className="col" id="7" onClick={handleColor} >7</div>
        <div className="col" id="8" onClick={handleColor} >8</div>
        <div className="col" id="9" style={{}} onClick={handleColor} >9</div>
      </div>


    </div>
  );
}

export default App;
