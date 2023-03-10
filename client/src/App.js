// client/src/App.js

import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://ec2-54-183-87-160.us-west-1.compute.amazonaws.com:8080/api",{ mode: 'cors' })
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Activar cors para ver el cambio" : data}</p>
      </header>
    </div>
  );
}

export default App;
