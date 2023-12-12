
import axios from "axios";

const postEliminarTownhall = async (url, id_townhall) => {
    try {
        const response = await axios.delete(`${url}${id_townhall}`);
        console.log('Delete success');
        console.log('response', response);
        return response;
    } catch (error) {
        console.error('Oh No! Error!', error);
        throw error;
    }
};

export default postEliminarTownhall;
