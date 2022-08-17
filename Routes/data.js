const express = require('express');
const router = express.Router();

const { getData } = require('../Controllers/data');

router.get('/data', getData);

module.exports = router;
