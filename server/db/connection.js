// connection.js
const mongoose = require('mongoose');

const conn = mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => {
    console.log("✅ MongoDB Connected Successfully");
    return db;
})
.catch(err => {
    console.error("❌ MongoDB Connection Failed:", err.message); // log real error
    return null; // ensures 'db' becomes null for graceful handling
});

module.exports = conn;
