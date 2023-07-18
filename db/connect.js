const mongoose = require('mongoose');


const connectDB = (url) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = connectDB;



// try {
//     // Connect to the MongoDB cluster
//     mongoose.connect(
//         connectionString, { useNewUrlParser: true, useUnifiedTopology: true },
//         () => console.log(" Mongoose is connected"),
//     );
// } catch (e) {
//     console.log("could not connect");
// }

// const dbConnection = mongoose.connection;
// dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
// dbConnection.once("open", () => console.log("Connected to DB!"));

// const connectionString = `mongodb+srv://Elisha:4321@cluster0.wwtxpyv.mongodb.net/`;