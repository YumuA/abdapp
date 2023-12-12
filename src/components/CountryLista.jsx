import React, { useEffect, useState } from "react";
import getCountryApi from "../api/getCountry";

const CountryLista = () => {
    const [countryList, setCountryList] = useState([]);
    const urlBase = "http://127.0.0.1:8000/showcountry/";

    useEffect(() => {
        loadCountry();
    }, []);
    
    const loadCountry = async () => {
        try {
            const response = await getCountryApi(urlBase);
            setCountryList(response);
        } catch (error) {
            console.error('Error al cargar la lista de países:', error);
        }
    };
    return (
        <div className="CountryLista">
            <h1 className="CountryListaTitle" >Country Lista</h1>
            <div>
                <div>
                    <p>Length: {countryList.length}</p>
                    {countryList.map((country) => (
                        <div key={country.id_country}>
                            <p>ID: {country.id_country}</p>
                            <p>Nombre: {country.nombre_country}</p>
                            <p>Continente: {country.continent_country}</p>
                            {/* Agrega aquí más campos según la estructura de tu API */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CountryLista