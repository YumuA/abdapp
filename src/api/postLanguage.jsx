
import axios from "axios";

const postLanguage = (url, id_language, percentage, is_official) => {
    console.log('Url: ', url);
    console.log('id_language: ', id_language);
    console.log('percentage: ', percentage);
    console.log('is_official: ', is_official);

    const requestData = {
        "id_language": id_language,
        "percentage": percentage,
        "is_official": is_official
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

export default postLanguage;
