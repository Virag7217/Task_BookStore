const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./utility/database');

const app = express();
const storeroutes = require('./routes/store');
const adminroutes = require('./routes/admin');



app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(storeroutes);
app.use(adminroutes);

const port = 3020;
app.listen(port, () => {
    console.log(`Server is running : Port = ${port}`);
});




