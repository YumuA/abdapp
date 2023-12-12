import axios from "axios";

const postEliminarCountry = (url,data) => {
    let urlDelete = `${url}${data}`;
    console.log('urlDelete: ',urlDelete);
    console.log('Url: ',url);
    console.log('data: ',data);
    axios.delete(urlDelete)
  .then(response => {
    console.log(`Deleted post with ID ${postIdToDelete}`);
  })
  .catch(error => {
    console.error(error);
  });
}

export default postEliminarCountry