const express = require("express");
const router = express.Router();
router.get("/", (req, res)=>{
    res.send("in another page");
})
// exporting router for use
module.exports = router;
// router.get("/");