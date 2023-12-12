import React from 'react'
import AgregarCity from '../components/AgregarCity'
import AgregarCountry from '../components/AgregarCountry'
import { AgregarCountryLanguage } from '../components/AgregarCountryLanguage'
import AgregarTownhall from '../components/AgregarTownHall'
import AgregarLanguage from '../components/AgregarLenguaje'

const Crear = () => {
  return (
    <div className="Crear">
      <h1 className="CrearTitle">Crear Nuevo Elemento</h1>
      <div className="CrearSection">
      <AgregarCity />
      <AgregarCountry/>
      <AgregarCountryLanguage />
      <AgregarTownhall />
      <AgregarLanguage />
    </div>
    </div>
  )
}

export default Crear