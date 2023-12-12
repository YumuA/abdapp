import React, { useEffect, useState } from "react";
import getLanguageApi from "../api/getLanguage";

const MostrarLanguage = () => {
    const [languageList, setLanguageList] = useState([]);
    const urlBase = "http://127.0.0.1:8000/showlanguages/";

    useEffect(() => {
        loadLanguage();
    }, []);

    const loadLanguage = async () => {
        try {
            const response = await getLanguageApi(urlBase);
            setLanguageList(response);
        } catch (error) {
            console.error('Error al cargar la lista de Languages:', error);
        }
    };

    return (
        <div className="CountryLista">
            <h1 className="CountryListaTitle">Language Lista</h1>
            <div>
                <div>
                    <p>Length: {languageList.length}</p>
                    {languageList.map((language) => (
                        <div key={language.id_language}>
                            <p>ID Language: {language.id_language}</p>
                            <p>Percentage: {language.percentage}</p>
                            <p>Is Official: {language.is_official ? 'Yes' : 'No'}</p>
                            {/* Agrega aquí más campos según la estructura de tu API */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MostrarLanguage;
