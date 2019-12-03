const mongoose = require('mongoose');

/*DATABASE_URL is our database connection string, or where the database engine is located, stored in .env */ 
mongoose.connect(process.env.DATABASE_URL, {
useNewUrlParser: true, 
useCreateIndex: true, 
useUnifiedTopology: true
});

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

db.on('disconnected', () => {
    console.warn('disconnected from Atlas')
})

db.on('error', error => {
    console.error(error)
})