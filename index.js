require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("OMSC Server is running ....");
})

app.listen(port, () => {
    console.log(`OMSC Server is running on Port: ${port}`);
})

