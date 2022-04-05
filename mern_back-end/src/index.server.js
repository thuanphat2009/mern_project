const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

// router
const authRouters = require('./routes/authRoute');
const adminRouters = require('./routes/adminRoute/authAdminRoute');
const categoryRouters = require('./routes/categoryRoute');
const productRouters = require('./routes/productRoute');
const cartRouters = require('./routes/cartRoute');

//environment variable
env.config();
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.f1t5l.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`)
.then(() => {
    useNewUrlParser = true,
    useUnifiedTopology = true,
    useCreateIndex =  true,
    console.log("Connect MongoDB successfully!")
})
.catch(() => {
    console.log("Connect MongoDB failure!")
});
app.use(express.json());
// app.use(express.static(path.join(__dirname,'uploads')))
app.use('/public',express.static(path.join(__dirname,'uploads')))
app.use('/api', authRouters);
app.use('/api', adminRouters);
app.use('/api', categoryRouters);
app.use('/api', productRouters);
app.use('/api', cartRouters);



app.listen( process.env.PORT, () => {
    console.log(`Run app with http://localhost:${process.env.PORT}`);
});