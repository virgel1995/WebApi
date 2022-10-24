const express = require("express"); 
const router = express.Router();
const { Utils } = require("@helpers/utils")

router.get("/login", (req, res) => {  
res.send(200); 
}); 

router.get("/logout", (req, res) => {  
res.send(200); 
}); 
module.exports= router;