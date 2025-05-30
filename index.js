require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./configs/db");

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

app.get("/", (req, res) => {
    res.send("OMSC Server is running ....");
})

app.listen(port, () => {
    console.log(`OMSC Server is running on Port: ${port}`);
})

