const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const colors = require('colors')
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');
const connectDB = require('./Config/db');
//env config
dotenv.config();

//router import 
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require("./routes/blogRouters");

//mongoDB connection
connectDB();

const app = express();

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routers
app.use('/api/v1/user',userRoutes);
app.use('/api/v1/user',blogRoutes);

app.listen(PORT,(req,res)=>{
    console.log(`server is running on  ${process.env.DEV_MODE} the port ${PORT}`);
})