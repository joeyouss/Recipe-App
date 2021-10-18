const express = require("express");
const router = express.Router();
// router.get("/", (req, res)=>{
//     res.send("in another page");
// })

router.get("/new", (req,res)=>{
    res.render("recipes/new")
})

router.post("/", (req,res)=>{

})
// exporting router for use
module.exports = router;
// router.get("/");