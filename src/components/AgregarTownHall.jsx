// AgregarTownhall.jsx
import React from 'react';
import postTownHall from "../api/postTownhall";
import { useNavigate } from 'react-router-dom';

const AgregarTownhall = () => {
    const navigate = useNavigate();
    const urlBase = "http://127.0.0.1:8000/NewTownHall/";

    const handleTownhall = async (e) => {
        e.preventDefault();
        const id_townhall = e.target.elements.id_townhall.value.trim();
        const mayor = e.target.elements.mayor.value;
        const councillor = e.target.elements.councillor.value;

        console.log('id_townhall:', id_townhall);
        console.log('mayor:', mayor);
        console.log('councillor:', councillor);

        // Verifica que los campos obligatorios no estén vacíos
     

        try {
            // Utiliza la función postTownhall y pasa los datos como argumentos
            const response = await postTownHall(urlBase, id_townhall, mayor, councillor);
            console.log(response);
            // Realiza cualquier acción adicional después de la creación exitosa
            navigate('/Crear');
        } catch (error) {
            console.error('Error en la llamada a la API:', error);
        }
    };

    return (
        <div className="Agregar">
            <h1 className="AgregarTittle">Agregar Townhall</h1>
            <form className="AgregarFormulario" onSubmit={handleTownhall}>
                <input type="text" name="id_townhall" id="id_townhall" className="id_townhall AgregarFormularioInput" placeholder="ID Townhall"></input>
                <input type="text" name="mayor" id="mayor" className="mayor AgregarFormularioInput" placeholder="Mayor" />
                <input type="text" name="councillor" id="councillor" className="councillor AgregarFormularioInput" placeholder="Councillor" />
                <button className="AgregarFormularioBtn" type="submit" name="townhall">Agregar</button>
            </form>
        </div>
    );
};

export default AgregarTownhall;
