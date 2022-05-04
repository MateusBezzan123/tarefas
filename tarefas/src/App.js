import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import  AxiosUsers  from "./components/Users/AxiosUsers"

const App = () => {
  return (
    <div className="App">
      <h3>Jsonplaceholder Teste Tecnico</h3>
      <br />
      <div>
        <AxiosUsers />
      </div>
    </div>
  );
};

export default App;
