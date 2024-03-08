const mongoose = require('mongoose');
const colors = require('colors')


const connectDB = async () =>{

    try {
        await mongoose.connect(process.env.MONGO_DB)
        console.log(`Connected to the mogngoDB ${mongoose.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Error while connecting to MOGODB ${error}`.bgRed.white);
    }
};

module.exports = connectDB;

// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_DB, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log(`Connected to the MongoDB: ${mongoose.connection.host}`.bgMagenta.white);
//     } catch (error) {
//         console.error(`Error while connecting to MongoDB: ${error.message}`.bgRed.white);
//         process.exit(1); // Exit process with failure
//     }
// };

// module.exports = connectDB;
