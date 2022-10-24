const express = require("express"); 
const router = express.Router();
const hug = require("@images/hug.json")

const kill = require("@images/kill.json")



/*
returns { url: imageurl}
*/
router.get("/hug", (req, res) => {  
var itemhug = hug[Math.floor(Math.random() *  hug.length)];   
res.json(itemhug); 
}); 

/*
returns { url: imageurl}
*/
router.get("/kill", (req, res) => { 
var itemkill = kill[Math.floor(Math.random() *  kill.length)];   
res.json(itemkill); 
}); 

module.exports= router;