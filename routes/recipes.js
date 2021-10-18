const express = require("express");
const Recipe = require("./../models/recipes")
const router = express.Router();
// router.get("/", (req, res)=>{
//     res.send("in another page");
// })

router.get("/new", (req,res)=>{
    const rec = await Recipe.findById(req.params.id)
    if(rec==null) res.redirect)("/")
    res.render("recipes/show", {recipe : recipe})
})
router.get("/:id", (req,res)=>{
    res.send(req.params.id)
})

router.post("/", async (req,res)=>{
    let recipe = new Recipe({
        title:req.body.title,
        ingredients:req.body.ingredients,
        recipe:req.body.recipe,
        createdAt:req.body.createdAt
    })
    try{
       recipe = await recipe.save();
       res.redirect(`/recipes/${recipe.id}`)
    }catch(e){
        res.render("recipes/new", {recipe:recipe})
    }
})
// exporting router for use
module.exports = router;
// router.get("/");