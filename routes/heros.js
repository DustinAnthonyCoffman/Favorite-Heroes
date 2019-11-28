var express = require('express');
var router = express.Router();
var herosCtrl = require('../controllers/heros')

   


router.post('/heros', herosCtrl.showHero);
    
 


module.exports = router;

