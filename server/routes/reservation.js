const express = require('express');
const router = express.Router();
const { reservationController } = require('../controllers');

router.post('/', reservationController.reservation.post);
router.get('/', reservationController.reservation.get);

module.exports = router;
