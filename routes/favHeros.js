const express = require('express');
const router = express.Router();
const favHerosCtrl = require('../controllers/favHeros')


/* POST users listing. */
router.get('/favHeros', favHerosCtrl.show); //redirect
router.post('/favHeros', favHerosCtrl.create); //add hero
// router.put('/favHeros', favHerosCtrl.show);  //put request with method override


module.exports = router;
