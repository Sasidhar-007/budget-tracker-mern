const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config({ path : "./config.env"});
const port = process.env.PORT || 5000;

// use middleware
app.use(cors());
app.use(express.json());

// mongodb connection
const con = require('./db/connection.js');

// using routes
app.use(require('./routes/route'));

con.then(db => {
    if (!db) {
        console.error("❌ Exiting application due to failed DB connection.");
        return process.exit(1);
    }

    app.listen(port, () => {
        console.log(`🚀 Server is running at: http://localhost:${port}`);
    });

    app.on('error', err => console.error("HTTP Server Error:", err));
}).catch(error => {
    console.error("Unexpected Error During Server Startup:", error.message);
});



