const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_SECRET, {
    serverSelectionTimeoutMS: 30000 
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    console.log("DB connected");
});

module.exports = db;