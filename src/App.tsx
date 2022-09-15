import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "react-css-bullseye";
  })
  return (
    <div className="App">
      <div className="parent">
        <div className="child">
          なにか<br></br>書いてみよう<br></br>どうしたって<br></br>曲がるよね
        </div>
      </div>
      <div className="parent">
        <div className="child">
          これはどうか
        </div>
      </div>
      <div className="bullseye">
        <div className="box1">k</div>
      </div>
    </div>
  );
}

export default App;
