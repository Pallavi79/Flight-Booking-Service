const express = require('express');
const router = express.Router();

const {InfoController} = require('../../controllers');
router.get('/info',InfoController.info);

const bookingRoutes = require('./booking')
router.use('/bookings',bookingRoutes);


module.exports = router;