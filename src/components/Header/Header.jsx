import React from "react";

import imageHeader from "../../assets/maxresdefault.jpg"

import "./Header.css";


const Header = ({setShowCharacters, setShowMovies}) => {

return (
    
    <header>
        <div className="imagenHeader">
        <img src={imageHeader} alt="Fun-with-flags" />
    </div>
        <nav>
            <h1> Bienvenido a Fun with Flags</h1>
            <h2 onClick={()=> setShowCharacters(true)}>Países</h2>
            <h2>Regiones</h2>
        </nav>
    </header>

)

}

export default Header