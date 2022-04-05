const express = require('express');
const env = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// router
const authRouters = require('./routes/authRoute');
const adminRouters = require('./routes/adminRoute/authAdminRoute');
const categoryRouters = require('./routes/categoryRoute');
const productRouters = require('./routes/productRoute');

//environment variable
env.config();
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.f1t5l.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`)
.then(() => {
    useNewUrlParser = true,
    useUnifiedTopology = true,
    useCreateIndex =  true
});
app.use(express.json());
app.use('/api', authRouters);
app.use('/api', adminRouters);
app.use('/api', categoryRouters);
app.use('/api', productRouters);



app.listen( process.env.PORT, () => {
    console.log(`Kết nối thành công PORT: ${process.env.PORT}`);
});