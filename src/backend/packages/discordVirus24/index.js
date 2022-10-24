const express = require("express"); 
const router = express.Router();
const { Utils } = require("@helpers/utils")

router.get("/virus", (req, res) => {  
res.send(200); 
}); 

module.exports= router;