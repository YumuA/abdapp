import axios from "axios";

const getTownhallApi = (url) => {
    return axios.get(url)
        .then(response => response.data)
        .catch(error => {
            console.log('Oh No! Error!');
            console.error(error);
            throw error;
        });
};

export default getTownhallApi;
