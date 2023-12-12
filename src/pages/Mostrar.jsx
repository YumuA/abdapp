import React from 'react'
import CountryLista from '../components/CountryLista'
import MostrarCountryLanguage from '../components/CountryLanguageLista'
import CityLista from '../components/CityLista'
import MostrarTownhall from '../components/TownHallLista'
import MostrarLanguage from '../components/LanguageLista'

const Mostrar = () => {
  return (
    <div className="Mostrar">
      <h1 className="MostrarTitle">Información Geográfica</h1>
      <div className="ListContainer">
      <CountryLista />
      <MostrarCountryLanguage />
      <CityLista />
      <MostrarTownhall />
      <MostrarLanguage />
    </div>
    </div>
  )
}

export default Mostrar