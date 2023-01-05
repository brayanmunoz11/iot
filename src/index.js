const express = require('express');

const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);


const { database } = require('./keys');

// Intializations
const app = express();
const cors = require('cors');
app.use(cors());

// Settings
app.set('port', process.env.PORT || 4000);

app.use(express.urlencoded({extended: true}));
app.use(express.json());



app.use(session({
  secret: 'faztmysqlnodemysql',
  resave: false,
  saveUninitialized: false,
  store: new MySQLStore(database)
}));




//Routes
app.use(require('./routes/iot'));

app.get('/', (req, res) => {
  //Resopuesta a la peticion
  res.status(200).json({
    gawr: 'gura'
  })
})



app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
  });



