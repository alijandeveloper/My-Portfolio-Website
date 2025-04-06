const express = require('express');
const { submitContact } = require('../controllers/contact');
const router = express.Router();

router.post('/', submitContact);

module.exports = router;