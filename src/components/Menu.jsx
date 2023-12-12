
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/sass/base.sass"


const Menu = () => {
  const [state, setState] = useState(false);
  const handleMenu = () => {
    setState(!state);
  };
  return (
    <nav className="nav">
        <NavLink
            to="/Crear"
            className="navLink"
            onClick={handleMenu}
          >Crear</NavLink>
        <NavLink
              to="/Eliminar"
              className="navLink"
              onClick={handleMenu}
            >Eliminar</NavLink>
        <NavLink
                to="/Mostrar"
                className="navLink"
                onClick={handleMenu}
              >Mostrar</NavLink>
        <NavLink
                  to="/Actualizar"
                  className="navLink"
                  onClick={handleMenu}
                >Actualizar</NavLink>
    </nav>
  );
};

export default Menu;