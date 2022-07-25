const express=require('express');
// const cookieSession = require("cookie-session");
const bodyParser=require('body-parser')
const usersRoutes=require('./routes/usersRoutes')
const productRoutes=require('./routes/productRoutes')
require("./db/index.js");
const passportSetup = require("./passport");
const cors = require('cors');
const session = require('express-session')
const passport=require("passport")
const app=express();
app.use(cors());
const port=process.env.PORT||5000;
app.use(bodyParser.json())

app.use(session({
  
   secret: 'somethingsecretgoeshere',
   resave: false,
   saveUninitialized: true,
   cookie: { secure: true, name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100, }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use('/users',usersRoutes);
app.use('/product',productRoutes)
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