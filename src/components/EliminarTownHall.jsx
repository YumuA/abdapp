// EliminarTownhall.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EliminarTownhall = () => {
    const navigate = useNavigate();
    const urlBase = "http://127.0.0.1:8000/deletetownhall/";

    const [idTownhall, setIdTownhall] = useState('');

    const handleDeleteTownhall = async (e) => {
        e.preventDefault();

        try {
            // Verifica que el ID del Townhall no esté vacío
            if (!idTownhall) {
                alert('Por favor, ingresa un ID de Townhall válido.');
                return;
            }

            // Utiliza la función postEliminarTownhall y pasa el ID del Townhall como argumento
            await postEliminarTownhall(urlBase, idTownhall);
            console.log('Townhall eliminado exitosamente.');

            // Puedes realizar cualquier acción adicional después de la eliminación exitosa
            navigate('/Crear'); // O redirige a la página que desees
        } catch (error) {
            console.error('Error al eliminar el Townhall:', error);
        }
    };

    return (
        <div className="Agregar">
            <h1 className="AgregarTittle">Eliminar Townhall</h1>
            <form className="AgregarFormulario" onSubmit={handleDeleteTownhall}>
                <label htmlFor="idTownhall" className="EliminarFormularioInput">ID Townhall:</label>
                <input
                    type="text"
                    name="idTownhall"
                    id="idTownhall"
                    className="idTownhall AgregarFormularioInput"
                    placeholder="ID Townhall"
                    value={idTownhall}
                    onChange={(e) => setIdTownhall(e.target.value)}
                ></input>
                <button className="AgregarFormularioBtn" type="submit">Eliminar</button>
            </form>
        </div>
    );
};

export default EliminarTownhall;
