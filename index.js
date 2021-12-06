const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json() );
const port = 5000


app.get('/', (req, res) => {
  res.send('Hello World! heloo hello first Express app again change This is again cha')
})

const users=[
  {id:1,name:"Shavana",email:"abc@gmail.com",phone:000000222},
  {id:1,name:"Ghandi",email:"abc@gmail.com",phone:000000222},
  {id:1,name:"Indragandi",email:"abc@gmail.com",phone:000000222},
  {id:1,name:"modi",email:"abc@gmail.com",phone:000000222},
  {id:1,name:"Amit",email:"abc@gmail.com",phone:000000222}
]
app.get("/users",(req,res)=>{
  const search=req.query.search;
  if(search){
const searchResult=users.filter(user=>user.name.toLowerCase().includes(search));
res.send(searchResult);

  }else{
    res.send(users)
  }
  
})
app.get("/users/:id",(req,res)=>{
const id=req.params.id;
const user=users[id]
res.send(user)
  
})
app.get("/fruits",(req,res)=>{
res.send(["mango","orange","finger"])

})
app.get("/fruits/mangoes/fazli",(req,res)=>{
res.send("This is fazli mangoes")
})
//post method
app.post("/users",(req,res)=>{
  const newUser=req.body;
   newUser.id=users.length;
   users.push(newUser)
   console.log("hitting post")
   res.json(newUser)

res.send("inside post")
})

app.listen(port, () => {
  console.log("This is listening port",port)
})