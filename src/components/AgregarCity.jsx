import React from 'react';
import postCityApi from "../api/postCity"; 
import { useNavigate } from 'react-router-dom';

export const AgregarCity = () => {  
    const navigate = useNavigate();
    const urlBase = "http://127.0.0.1:8000/NewCity/";

    const handleCity = async (e) => {
        e.preventDefault();

        // Obtén los valores de los campos del formulario
        const idCity = document.getElementById('idCity').value.trim();  
        const name = document.getElementById('name').value.trim();  
        const district = document.getElementById('district').value.trim();
        const population = parseInt(document.getElementById('population').value, 10) || 0;
        const id_country = document.getElementById('id_country').value.trim();
        const id_townhall = document.getElementById('id_townhall').value.trim();

        // Verifica que los campos obligatorios no estén vacíos
        if (!idCity || !name || !id_country || !id_townhall) {
            console.error('Por favor, completa todos los campos obligatorios.');
            return;
        }

        // Verifica que los campos numéricos tengan valores válidos
        if (isNaN(population)) {
            console.error('La población debe ser un valor numérico.');
            return;
        }

        const cityPost = async () => {
            try {
                // Utiliza la función postCityApi y pasa los datos como argumentos
                await postCityApi(urlBase, idCity, name, district, population, id_country, id_townhall);
                // Realiza cualquier acción adicional después de la creación exitosa
                navigate('/Crear');
            } catch (error) {
                console.error('Error en la llamada a la API:', error);
            }
        };

        cityPost();
    };

    return (
        <div className="Agregar">
            <h1 className="AgregarTittle">Agregar City</h1>  
            <form className="AgregarFormulario" onSubmit={handleCity}>  
                <input type="text" name="idCity" id="idCity" className="idCity AgregarFormularioInput" placeholder="ID City"></input>  
                <input type="text" name="name" id="name" className="name AgregarFormularioInput" placeholder="Nombre City"></input>  
                <input type="text" name="district" id="district" className="district AgregarFormularioInput" placeholder="District"></input>
                <input type="number" name="population" id="population" className="population AgregarFormularioInput" placeholder="Population"></input>
                <input type="text" name="id_country" id="id_country" className="id_country AgregarFormularioInput" placeholder="ID Country"></input> 
                <input type="text" name="id_townhall" id="id_townhall" className="id_townhall AgregarFormularioInput" placeholder="ID Townhall"></input>
                <button className="AgregarFormularioBtn" type="submit" name="city">Agregar</button>
            </form>
        </div>
    );
};

export default AgregarCity;
