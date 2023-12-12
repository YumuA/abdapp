import React, { useEffect, useState } from 'react';
import getCountryLanguageApi from '../api/getCountryLanguage';

const MostrarCountryLanguage = () => {
    const [countryLanguageList, setCountryLanguageList] = useState([]);
    const urlBase = 'http://127.0.0.1:8000/showcountrysl/';

    useEffect(() => {
        loadCountryLanguage();
    }, []);

    const loadCountryLanguage = async () => {
        try {
            const response = await getCountryLanguageApi(urlBase);
            setCountryLanguageList(response);
        } catch (error) {
            console.error('Error al cargar la lista de Country Language:', error);
        }
    };

    return (
        <div className="CountryLista" >
            <h1 className="CountryListaTitle">Country Language Lista</h1>
            <div>
                <div>
                    <p>Length: {countryLanguageList.length}</p>
                    {countryLanguageList.map((countryLanguage) => (
                        <div key={countryLanguage.id}>
                            <p>ID: {countryLanguage.id}</p>
                            <p>Nombre Language: {countryLanguage.name_language}</p>
                            <p>ID Country: {countryLanguage.id_country}</p>
                            {/* Agrega aquí más campos según la estructura de tu API */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MostrarCountryLanguage;
