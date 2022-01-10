// apiController
const apiModel = require('../model/apiModel');

const apiPost = (req, res) => {   
    apiModel.serviceApi(req.body)
    .then(response => response.json())
    .then(function(data) {
        res.send(data);
    })
    .catch(error => console.log(error));
}

module.exports = {
    apiPost
}