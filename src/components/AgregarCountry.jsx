import React from 'react';
import postCountryApi from "../api/postCountry";
import { useNavigate } from 'react-router-dom';

export const AgregarCountry = () => {
    const navigate = useNavigate();
    const urlBase = "http://127.0.0.1:8000/NewCountry/";

    const handleCountry = (e) => {
        e.preventDefault();
        let nombreCountry = document.getElementById('nombreCountry').value;
        let idCountry = document.getElementById('idCountry').value;
        let continentCountry = document.getElementById('continentCountry').value;
        let regionCountry = document.getElementById('regionCountry').value;
        let surfaceCountry = document.getElementById('surfaceCountry').value;
        let indepYearCountry = document.getElementById('indepYearCountry').value;
        let populationCountry = document.getElementById('populationCountry').value;
        let lifeExpectancy = document.getElementById('lifeExpectancy').value;
        let GNPCountry = document.getElementById('GNPCountry').value;
        let GNPold = document.getElementById('GNPold').value;
        let localname = document.getElementById('localname').value;
        let government = document.getElementById('government').value;
        let statehead = document.getElementById('statehead').value;
        let capitalId = document.getElementById('capitalId').value;
        let countryCode2 = document.getElementById('countryCode2').value;

        const countryPost = async () => {
            const response = await postCountryApi(
                urlBase,
                nombreCountry,
                idCountry,
                continentCountry,
                regionCountry,
                surfaceCountry,
                indepYearCountry,
                populationCountry,
                lifeExpectancy,
                GNPCountry,
                GNPold,
                localname,
                government,
                statehead,
                capitalId,
                countryCode2
            );
            console.log('response: ' + response);
        };
        countryPost();
    };

    return (
        <div className="Agregar">
            <h1 className="AgregarTittle">Agregar Country</h1>
            <form className="AgregarFormulario" onSubmit={handleCountry}>
                <input type="text" name="nombreCountry" id="nombreCountry" className="nombreCountry AgregarFormularioInput" placeholder="Nombre Country"></input>
                <input type="text" name="idCountry" id="idCountry" className="idCountry AgregarFormularioInput" placeholder="ID Country"></input>
                <input type="text" name="continentCountry" id="continentCountry" className="continentCountry AgregarFormularioInput" placeholder="Continent Country"></input>
                <input type="text" name="regionCountry" id="regionCountry" className="regionCountry AgregarFormularioInput" placeholder="Region Country"></input>
                <input type="text" name="surfaceCountry" id="surfaceCountry" className="surfaceCountry AgregarFormularioInput" placeholder="Surface Country"></input>
                <input type="text" name="indepYearCountry" id="indepYearCountry" className="indepYearCountry AgregarFormularioInput" placeholder="Independence Year Country"></input>
                <input type="text" name="populationCountry" id="populationCountry" className="populationCountry AgregarFormularioInput" placeholder="Population Country"></input>
                <input type="text" name="lifeExpectancy" id="lifeExpectancy" className="lifeExpectancy AgregarFormularioInput" placeholder="Life Expectancy"></input>
                <input type="text" name="GNPCountry" id="GNPCountry" className="GNPCountry AgregarFormularioInput" placeholder="GNP Country"></input>
                <input type="text" name="GNPold" id="GNPold" className="GNPold AgregarFormularioInput" placeholder="GNP Old"></input>
                <input type="text" name="localname" id="localname" className="localname AgregarFormularioInput" placeholder="Local Name"></input>
                <input type="text" name="government" id="government" className="government AgregarFormularioInput" placeholder="Government"></input>
                <input type="text" name="statehead" id="statehead" className="statehead AgregarFormularioInput" placeholder="State Head"></input>
                <input type="text" name="capitalId" id="capitalId" className="capitalId AgregarFormularioInput" placeholder="Capital ID"></input>
                <input type="text" name="countryCode2" id="countryCode2" className="countryCode2 AgregarFormularioInput" placeholder="Country Code 2"></input>
                
                <button className="AgregarFormularioBtn" type="submit" name="country">Agregar</button>
            </form>
        </div>
    );
};

export default AgregarCountry;
