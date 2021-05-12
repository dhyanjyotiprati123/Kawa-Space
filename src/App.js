import React from 'react';
import "./Style/main.css";
import Home from "./Pages/Home";
import {Switch , Route} from "react-router-dom";


function App() {
  return (
    <>
      <Switch >
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
