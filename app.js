const express = require("express");
const app = express();
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
require("dotenv").config();


connectDB();


app.use(express.json());


app.use("/api/students", studentRoutes);


const errorHandler = require("./middlewares/errorHandler");


app.use(errorHandler); 


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
