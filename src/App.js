import React from "react";
import "./App.css";
import NASA from "./components/NASA";


function App() {
  return (
    <div className="App">
      <div className="head">
        <h1>NASA Daily Photo Apps</h1>
      </div>
      
      <NASA />
    </div>
  );
}

export default App;
