// apiModel
const fetch = require('node-fetch');
const apiUrl = 'https://monday-api.grus.zone/';



const serviceApi = async (param) => {

                 

        let promise = await fetch(apiUrl, {
        method: 'POST',
        mode: 'cors',
        headers: {
        'Access-Control-Allow-Origin':'*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(param) }
    )
    return promise;
}

module.exports = {
    serviceApi
}