// apiRoutes.js
const express = require('express');
const apiController = require('../controller/apiController');
const router = express.Router();

router.post('/api', apiController.apiPost);

module.exports = router;