const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');

/////////////config/////////////////

const app = express();

app.use(express.json());
app.use(cors());

////////////routes//////////////////////////////
app.use('/api/user', authRoutes);

//////////////mongoose setup////////////////////
const PORT = 3001 || 5000;

///////////////mongoDB connection///////////////////////////
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://dolev6780:jVRge5VndDpvNO0M@ourleague.ejfddu7.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    app.listen(PORT, ()=>{console.log("server port", PORT)});
}).catch((err)=>{console.log(err,"err something gone wrong")});