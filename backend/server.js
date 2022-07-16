const express = require("express")
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleWare");
const connectDb = require("./config/db");
const colors = require('colors');
const port = process.env.PORT || 5000;

connectDb();

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
