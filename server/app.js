const express=require('express');
const bodyParser=require('body-parser')

require("./db/index.js");
const cors = require('cors');
const app=express();
app.use(cors());
const port=process.env.PORT||5000;
app.use(bodyParser.json())

app.use('/',(req,res,next)=>{
  res.json({message:"hello wolrd"})
})
app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})