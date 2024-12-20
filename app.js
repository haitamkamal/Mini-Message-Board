const express = require("express");
const app = express();
const path = require("node:path");
const authorRouter = require ("./routes/authorRouter");
app.use(express.urlencoded({ extended: true }));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use("/",authorRouter);






const PORT = 3000;
app.listen(PORT,()=>{
  console.log(`My first Express app - listening on port ${PORT}!`);
})
