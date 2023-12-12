import React from 'react';
import postEliminarCountry from "../api/postEliminarCountry";
import { useNavigate } from 'react-router-dom';

const EliminarCountry = () => {
    const navigate = useNavigate();
    const urlBase = "http://127.0.0.1:8000/deletecountry/";

    const handleCountry = async (e) => {
        e.preventDefault();
        const idCountry = document.getElementById('id_country').value;
        
        try {
            if (idCountry.trim() === '') {
                alert('Por favor, ingresa un ID de país válido.');
                return;
            }

            await postEliminarCountry(urlBase, idCountry);
            navigate('/Eliminar');
        } catch (error) {
            console.error('Error al eliminar el país:', error);
        }
    };

    return (
        <div className="Agregar">
            <h1 className="AgregarTittle">Eliminar Country</h1>
            <form className="AgregarFormulario" onSubmit={handleCountry}>
                <input type="text" name="id_country" id="id_country" className="id_country AgregarFormularioInput" placeholder="Id"></input>
                <button className="AgregarFormularioBtn" type="submit">Eliminar</button>
            </form>
        </div>
    );
}

export default EliminarCountry;
