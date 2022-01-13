// apiModel
const fetch = require('node-fetch');
const apiUrl = 'https://monday-api.grus.zone/';

var param = {};
param._api_token = "DB6A520C73B3513661DEB6BC3C9C688F";
param._group = "Article";
param._action = "ArticleGet";


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