const express = require('express');
const router = express.Router();
const favHerosCtrl = require('../controllers/favHeros')


/* POST users listing. */
router.get('/', favHerosCtrl.show); //redirect
router.post('/', favHerosCtrl.create); //add hero
router.delete('/:id', favHerosCtrl.delete)
router.put('/:id', favHerosCtrl.update)


module.exports = router;
