import axios from "axios";

const postCityApi = (url, idCity, name, district, population, id_country, id_townhall) => {
    console.log('Url: ', url);
    console.log('name: ', name);

    // Verifica que los campos no estén enviando valores nulos
    const requestData = {
        idCity,
        name,
        district,
        population,
        id_country,
        id_townhall
    };

    console.log('Objeto: ', requestData);

    axios.post(url, requestData)
        .then(response => {
            console.log('post success');
            console.log('response', response);
        })
        .catch(error => {
            console.log('Oh No! Error!');
            console.log(error);
        });
};

export default postCityApi;
