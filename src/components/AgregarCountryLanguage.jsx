import React from 'react';
import postCountryLanguage from "../api/postCountryLanguage";
import { useNavigate } from 'react-router-dom';

export const AgregarCountryLanguage = () => {
    const navigate = useNavigate();
    const urlBase = "http://127.0.0.1:8000/NewCl/";

    const handleCountry = (e) => {
        e.preventDefault();
        let name_language = document.getElementById('name_language').value;
        let id_country = document.getElementById('id_country').value;

        const postCountryLan = async () => {
            const response = await postCountryLanguage(
                urlBase,
                name_language,
                id_country,
                id_language,
            );
            console.log('response: ' + response);
        };
        postCountryLan();
    };

    return (
        <div className="Agregar">
            <h1 className="AgregarTittle">Agregar Country Language</h1>
            <form className="AgregarFormulario" onSubmit={handleCountry}>
                <input type="text" name="name_language" id="name_language" className="name_language AgregarFormularioInput" placeholder="Nombre Country"></input>
                <input type="text" name="id_country" id="id_country" className="id_country AgregarFormularioInput" placeholder="ID Country"></input>
                <input type="text" name="id_language" id="id_language" className="id_language AgregarFormularioInput" placeholder="ID Language Of Country"></input>
               
                <button className="AgregarFormularioBtn" type="submit" name="country">Agregar</button>
            </form>
        </div>
    );
};

export default AgregarCountryLanguage;
