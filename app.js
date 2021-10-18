const express = require("express")
const mongoose = require("mongoose");
const app = express();
const recipeRouter = require("./routes/recipes")

mongoose.connect("mongodb://localhost/recipeapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// ----

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}))
app.use("/recipes", recipeRouter)
// -----
app.get("/", (req, res)=>{
    const recipes = [{
        // we need a title, date and recipe
        title:"Test recipe",
        createdAt: new Date(),
        ingre: "just checking"
    },
    {
        // we need a title, date and recipe
        title:"Test recipe 2",
        createdAt: new Date(),
        ingre: "just checking2"
    }]
    res.render("recipes/index", {recipes : recipes});
})

app.listen(3000);
