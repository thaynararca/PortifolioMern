const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes')

const app = express();
const port = process.env.PORT || 5005;

mongoose.connect(process.env.MONGO_URL ||'mongodb://localhost:27017/curso', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('MongoDB CONECTADO com sucesso!');
    }
});

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
};

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

app.listen(port, function() {
    console.log(`Server runing on port ${port}`);
});