const express = require('express');
const router = express.Router();
const herosCtrl = require('../controllers/heros')

   


router.post('/heros', herosCtrl.showHero); // this only shows a searched hero
// router.post('/heros', herosCtrl.showRandom);    //this needs to be a put request
    
 


module.exports = router;

