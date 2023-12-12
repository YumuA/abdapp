// AgregarLanguage.jsx
import React from 'react';
import postLanguage from "../api/postLanguage";
import { useNavigate } from 'react-router-dom';

const AgregarLanguage = () => {
    const navigate = useNavigate();
    const urlBase = "http://127.0.0.1:8000/NewLanguage/";

    const handleLanguage = async (e) => {
        e.preventDefault();
        const id_language = e.target.elements.id_language.value.trim();
        const percentage = e.target.elements.percentage.value;
        const is_official = e.target.elements.is_official.checked;

        console.log('id_language:', id_language);
        console.log('percentage:', percentage);
        console.log('is_official:', is_official);

        // Verifica que los campos obligatorios no estén vacíos
        if (!id_language || !percentage) {
            console.error('Por favor, completa todos los campos obligatorios.');
            return;
        }

        try {
            // Utiliza la función postLanguage y pasa los datos como argumentos
            const response = await postLanguage(urlBase, id_language, percentage, is_official);
            console.log(response);
            // Realiza cualquier acción adicional después de la creación exitosa
            navigate('/Crear');
        } catch (error) {
            console.error('Error en la llamada a la API:', error);
        }
    };

    return (
        <div className="Agregar">
            <h1 className="AgregarTittle">Agregar Language</h1>
            <form className="AgregarFormulario" onSubmit={handleLanguage}>
                <input type="text" name="id_language" id="id_language" className="id_language AgregarFormularioInput" placeholder="ID Language"></input>
                <input type="number" name="percentage" id="percentage" className="percentage AgregarFormularioInput" placeholder="Percentage"></input>
                <label>
                    <input type="checkbox" name="is_official" id="is_official" className="is_official AgregarFormularioInputCheckbox" />
                    Is Official
                </label>
                <button className="AgregarFormularioBtn" type="submit" name="language">Agregar</button>
            </form>
        </div>
    );
};

export default AgregarLanguage;
