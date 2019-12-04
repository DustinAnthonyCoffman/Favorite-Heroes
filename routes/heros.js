const express = require('express');
const router = express.Router();
const herosCtrl = require('../controllers/heros')

   


router.post('/heros', herosCtrl.showHero); 
router.put('/heros', herosCtrl.showRandom);    
    
 


module.exports = router;

