import axios from "axios";

const postCountryApi = (
    url,
    nombreCountry,
    idCountry,
    continentCountry,
    regionCountry,
    surfaceCountry,
    indepYearCountry,
    populationCountry,
    lifeExpectancy,
    GNPCountry,
    GNPold,
    localname,
    government,
    statehead,
    capitalId,
    countryCode2
) => {
    console.log('Url: ', url);
    console.log('nombreCountry: ', nombreCountry);
    console.log('idCountry: ', idCountry);
    console.log('continentCountry: ', continentCountry);
    console.log('regionCountry: ', regionCountry);
    console.log('surfaceCountry: ', surfaceCountry);
    console.log('indepYearCountry: ', indepYearCountry);
    console.log('populationCountry: ', populationCountry);
    console.log('lifeExpectancy: ', lifeExpectancy);
    console.log('GNPCountry: ', GNPCountry);
    console.log('GNPold: ', GNPold);
    console.log('localname: ', localname);
    console.log('government: ', government);
    console.log('statehead: ', statehead);
    console.log('capitalId: ', capitalId);
    console.log('countryCode2: ', countryCode2);

    const data = {
        "nombre_country": nombreCountry,
        "id_country": idCountry,
        "continent_country": continentCountry,
        "region_country": regionCountry,
        "surface_country": surfaceCountry,
        "indep_year_country": indepYearCountry,
        "population": populationCountry,
        "life_expectancy": lifeExpectancy,
        "GNP": GNPCountry,
        "GNPold": GNPold,
        "localname": localname,
        "government": government,
        "statehead": statehead,
        "capital_country": capitalId,
        "code2": countryCode2
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

export default postCountryApi;
