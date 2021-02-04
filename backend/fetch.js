const fetch = require('node-fetch');



const pfizerVaccinesOrdered = () => {
    var pfizer;
    fetch("https://data.cdc.gov/resource/saz5-9hgg.json?jurisdiction=California")
        .then((response) => response.json())
        .then((data) => {
            let modifiedString = data[0].total_pfizer_allocation_first_dose_shipments;
            modifiedString = modifiedString.replace(/,/g, "");
            pfizer = parseInt(modifiedString);
            return pfizer;
        })
        .catch((err) => console.log(err))
}

const modernaVaccinesOrdered = async () => {
    var moderna;
    fetch("https://data.cdc.gov/resource/b7pe-5nws.json?jurisdiction=California")
        .then((response) => response.json())
        .then((data) => {
            let modifiedString = data[0].total_moderna_allocation_first_dose_shipments;
            modifiedString = modifiedString.replace(/,/g, '');
            moderna = parseInt(modifiedString);
        })
        .then(() => {
            const data = moderna;
            return data;
        })
        .catch((err) => console.log(err))
}

module.exports = {
    pfizerVaccinesOrdered,
    modernaVaccinesOrdered,
}