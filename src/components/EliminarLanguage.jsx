import React from 'react';
import postEliminarLanguage from "../api/postEliminarLanguage";
import { useNavigate } from 'react-router-dom';

const EliminarLanguage = () => {
    const navigate = useNavigate();
    const urlBase = "http://127.0.0.1:8000/deletelanguage/";

    const handleLanguage = async (e) => {
        e.preventDefault();
        const idLanguage = document.getElementById('id_Language').value;
        
        try {
            if (idLanguage.trim() === '') {
                alert('Por favor, ingresa un ID de país válido.');
                return;
            }

            await postEliminarLanguage(urlBase, idLanguage);
            navigate('/Eliminar');
        } catch (error) {
            console.error('Error al eliminar el país:', error);
        }
    };

    return (
        <div className="Agregar">
            <h1 className="AgregarTittle">Eliminar Language</h1>
            <form className="AgregarFormulario" onSubmit={handleLanguage}>
                <input type="text" name="id_Language" id="id_Language" className="id_Language AgregarFormularioInput" placeholder="Id"></input>
                <button className="AgregarFormularioBtn" type="submit">Eliminar</button>
            </form>
        </div>
    );
}

export default EliminarLanguage;
