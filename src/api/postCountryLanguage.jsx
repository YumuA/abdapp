import axios from "axios";

const postCountryLanguage = (url, name_language, id_country) => {
    console.log('Url: ', url);
    console.log('name_language: ', name_language);
    console.log('id_country: ', id_country);
    //agregar mas modelos tambien 


    const data = {
        "name_language": name_language, 
        "id_country": "1",
        "id_language": "21"

        //agregar más modelos
    };

    console.log('Objeto: ', data);

    axios.post(url, data)
        .then(response => {
            console.log('post success');
            console.log('response', response);
        })
        .catch(error => {
            console.log('Oh No! Error!');
            console.log(error);
        });
};

export default postCountryLanguage;
