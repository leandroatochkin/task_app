import React from "react";
import freeCodeCampLogo from '../imagenes/logo-freecodecamp.png'

const LogoFreeCodeCamp = () => {
    return (
        <div className='freecodecamp-logo-contenedor'>
        <img
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo de freeCodeCamp'
        />
      </div>
    )
};

export default LogoFreeCodeCamp;