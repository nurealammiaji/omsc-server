const mongoose = require("mongoose");

const connectDB = async () => {
    try {
       await mongoose.connect('mongodb://localhost:27017/', {dbName: 'omsc'});
        console.log("Database connected successfully!");
    } catch (error) {
        console.log("There is an error: ", error);
    }
}

module.exports = connectDB;