const { Router } = require('express');
const router = Router();
//const express = requiere(express);
//const router = express.Router();

router.get('/',(req,res) =>{
    res.json({"name":"John Doe"});
});

module.exports = router;