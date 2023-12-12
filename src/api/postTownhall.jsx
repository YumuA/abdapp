// postTownHall.jsx
import axios from "axios";

const postTownHall = (url, id_townhall, mayor, councillor) => {
    console.log('Url: ', url);
    console.log('id_townhall: ', id_townhall);
    console.log('mayor: ', mayor);
    console.log('councillor: ', councillor);

    const requestData = {
        "id_townhall": id_townhall,
        "mayor": mayor,
        "councillor": councillor
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

export default postTownHall;
