import React, {useState, useEffect} from "react";
import axios from "axios";
import PaisCard from "./../PaisCard/PaisCard"
import "./Paises.css"


const URL = "https://restcountries.com/v3.1/all"

const Paises = () => {

    const [paisesList, setPaisesList] = useState([]);

    const getPaises = async () => {
        const rawData = await axios.get(URL);

setPaisesList(rawData.data) 
    }

useEffect(() =>{
    getPaises();
}, []);

  return (

    <div className="PaisCont">
        
        
        {paisesList.length > 0 ? (

            paisesList.map((pais) => 

            <PaisCard paisInfo={pais} key={pais.name} /> )) :

            (<p>Cargando paises</p>)
        }
        </div>
  )
}



export default Paises 