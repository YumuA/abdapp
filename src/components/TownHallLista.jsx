import React, { useEffect, useState } from "react";
import getTownhallApi from "../api/getTownhall";

const MostrarTownhall = () => {
    const [townhallList, setTownhallList] = useState([]);
    const urlBase = "http://127.0.0.1:8000/showtownhalls/";

    useEffect(() => {
        loadTownhall();
    }, []);
    
    const loadTownhall = async () => {
        try {
            const response = await getTownhallApi(urlBase);
            setTownhallList(response);
        } catch (error) {
            console.error('Error al cargar la lista de Townhalls:', error);
        }
    };

    return (
        <div className="CountryLista">
            <h1 className="CountryListaTitle">Townhall Lista</h1>
            <div>
                <div>
                    <p>Length: {townhallList.length}</p>
                    {townhallList.map((townhall) => (
                        <div key={townhall.id_townhall}>
                            <p>ID Townhall: {townhall.id_townhall}</p>
                            <p>Mayor: {townhall.mayor}</p>
                            <p>Councillor: {townhall.councillor}</p>
                            {/* Agrega aquí más campos según la estructura de tu API */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MostrarTownhall;
