import React, { useEffect, useState } from "react";
import getcityApi from "../api/getCity";

const CityLista = () => {
    const [cityList, setcityList] = useState([]);
    const urlBase = "http://127.0.0.1:8000/showcity/";

    useEffect(() => {
        loadcity();
    }, []);
    
    const loadcity = async () => {
        try {
            const response = await getcityApi(urlBase);
            setcityList(response);
        } catch (error) {
            console.error('Error al cargar la lista de Citys:', error);
        }
    };
    return (
        <div className="CountryLista">
            <h1 className="CountryListaTitle">city Lista</h1>
            <div>
                <div>
                    <p>Length: {cityList.length}</p>
                    {cityList.map((city) => (
                        <div key={city.name}>
                            <p>City: {city.idCity}</p>
                            <p>ID Country: {city.id_country}</p>
                            {/* Agrega aquí más campos según la estructura de tu API */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CityLista