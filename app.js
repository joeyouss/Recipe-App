const express = require("express")
const app = express();
const recipeRouter = require("./routes/recipes")
app.set("view engine", "ejs");

app.use("/recipe",recipeRouter)

app.get("/", (req, res)=>{
    res.render("index", {text : "recipes"});
})

app.listen(3000);
