const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const dotenv = require("dotenv");
const bodyParser = require('body-parser');

const accountRouter = require('./routes/accountRoute');
const attendanceRouter  = require('./routes/attendanceRoute');

dotenv.config({ path: './.env' });

const app = express();

const Port = process.env.PORT

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(express.static('client/build'));

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})

app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.use('/accountRoute', accountRouter);
app.use('/attendanceRoute', attendanceRouter);

const db = process.env.MONGO_URI

mongoose.connect(db, {useUnifiedTopology : true , useNewUrlParser: true}).then(() => {
    console.log('db connected...')
  }).catch(err => console.log(err));

app.listen(Port, () => console.log(`Server starting at Port: ${Port}`));

