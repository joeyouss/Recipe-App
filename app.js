const express = require("express")
const mongoose = require("mongoose");
const Recipee = require('./models/recipes')
const app = express();
const recipeRouter = require("./routes/recipes")

mongoose.connect("mongodb://localhost/recipeapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// ----

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}))

// -----
app.get("/", async (req, res)=>{
    const recipes = await Recipee.find()
    // const recipes = [{
    //     // we need a title, date and recipe
    //     title:"Test recipe",
    //     createdAt: new Date(),
    //     ingre: "just checking"
    // },
    // {
    //     // we need a title, date and recipe
    //     title:"Test recipe 2",
    //     createdAt: new Date(),
    //     ingre: "just checking2"
    // }]
    res.render("recipes/index", {recipes : recipes});
})
app.use("/recipes", recipeRouter)
app.listen(3000);
