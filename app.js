const express = require("express")
const app = express();
const recipeRouter = require("./routes/recipes")
app.set("view engine", "ejs");

app.use("/recipes",recipeRouter)

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
    res.render("index", {recipes : recipes});
})

app.listen(3000);
