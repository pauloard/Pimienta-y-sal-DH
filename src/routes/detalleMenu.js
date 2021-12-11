let express = require('express');
let router = express.Router();

let detalleMenuController = require('../controllers/detalleMenuController');

/* GET home page. */
router.get('/:id', detalleMenuController.detalleMenu);

module.exports = router;
