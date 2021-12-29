const mongoose = require('mongoose');
require('dotenv').config();

var mongoDB = process.env.DATABASE;

// mongoose.connect(mongoDB, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => {
//         console.log("Connected DB");
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// module.exports = mongoose


let db = async() => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        };
        await mongoose.connect(mongoDB, connectionParams);
        console.log("connected to database.");
    } catch (error) {
        console.log("could not connect to database", error);
    }
};


module.exports = db