import React, {useState, useEffect} from "react";
import axios from "axios";
import RegionCard from "./../RegionCard/Regioncard"
import "./Regiones.css"

const URL = "https://restcountries.com/v3.1/all"

const Regiones = () => {
    const [regionesList, setRegionesList] = useState([]);
    
    const getRegiones = async () => {
        const rawData = await axios.get(URL);

setRegionesList(rawData.data) 
    }



useEffect(() =>{
    getRegiones();
}, []);

  return (

    <div className="Regiones">
        
        
        {regionesList.length > 0 ? (

            regionesList.map((region) => 

            <RegionCard regionInfo={region} key={region.name} /> )) :

            (<p>Cargando regiones</p>)
        }
        </div>
  )
}

export default Regiones