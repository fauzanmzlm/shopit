const mongoose = require('mongoose');

const connectDatabase = () => {
    console.log('Connecting to database...');
    mongoose.set('debug', true);
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true
      }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
    }).catch(error => {
        console.error('Error connecting to database', error);
    });
};

module.exports = connectDatabase