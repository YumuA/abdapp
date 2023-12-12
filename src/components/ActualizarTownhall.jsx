import React, { useState } from 'react';
import postActualizarTownhall from '../api/postActualizarTownhall';
import { useNavigate } from 'react-router-dom';

const ActualizarTownhall = () => {
    const navigate = useNavigate();
    const urlBase = "http://127.0.0.1:8000/atualizartownhall";

    const [formData, setFormData] = useState({
        id: '',
        trabajo: '',
        sigla: '',
        active: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: inputValue,
        });
    };

    const handleActualizarTownhall = async (e) => {
        e.preventDefault();

        try {
        
            await postActualizarTownhall(urlBase, formData.id, formData.trabajo, formData.sigla, formData.active);
            
            navigate('/actualizar'); 
        } catch (error) {
            console.error('Error en la llamada a la API:', error);
        }
    };

    return (
        <div className="Agregar">
            <h1 className="AgregarTittle">Actualizar Townhall</h1>
            <form className="AgregarFormulario" onSubmit={handleActualizarTownhall}>
                <input
                    type="number"
                    name="id"
                    id="id"
                    className="id AgregarFormularioInput"
                    placeholder="ID Townhall"
                    value={formData.id}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="trabajo"
                    id="trabajo"
                    className="trabajo AgregarFormularioInput"
                    placeholder="Nombre Townhall"
                    value={formData.trabajo}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="sigla"
                    id="sigla"
                    className="sigla AgregarFormularioInput"
                    placeholder="Sigla"
                    value={formData.sigla}
                    onChange={handleInputChange}
                />
                <label htmlFor="active" className='AgregarFormularioInput'> Activo</label>
                <input
                    type='checkbox'
                    name="active"
                    id="active"
                    className="active AgregarFormularioInput"
                    checked={formData.active}
                    onChange={handleInputChange}
                />
                <button className="AgregarFormularioBtn" type="submit" name="townhall">Actualizar</button>
            </form>
        </div>
    );
};

export default ActualizarTownhall;
