const messages = [
  {
    user: "Amando",
    text: "Hi there!",
    added: new Date()
  },
  {
    user: "Charles",
    text: "Hello World!",
    added: new Date()
  }
];
const  router  = require("express");
const authorRouter = router()

authorRouter.get("/",(req,res)=> res.render("index",{messages:messages}));
authorRouter.get("/new",(req,res)=> res.render("form"));
authorRouter.post("/new",(req,res)=> {
  messages.push({user: req.body.user, text: req.body.text, added: new Date()});
  res.redirect("/")});
authorRouter.get("/:user",(req,res)=>{
  const link = req.params
  messages.forEach((message) => {
    if(link.user === message.user){
      res.send(message.text);
    }
  })
})
authorRouter.get("*",(req,res) => res.send("EURROR404"));

module.exports = authorRouter;