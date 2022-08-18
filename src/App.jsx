//import React, {useState} from "react";
// import axios from 'axios';

import React from "react";
import Header from "./components/Header/Header";
import Paises from "./components/Paises/Paises";
import Regiones from "./components/Regiones/Regiones";

import {useState} from   "react"

function App () {

const [showPaises, setShowPaises] =useState (false);
const [showRegiones, setShowRegiones] = useState(false);

return (
  
<div className = "App">
<Header Header= {Header} />

{showPaises ? <Paises Paises = {Paises}/> : null }
{showRegiones ? <Regiones Regiones = {Regiones}/> : null}
  
</div>
  
)

}

export default App

//const URL = "https://restcountries.com/v3.1/all";





