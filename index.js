const express = require('express');
const hbs = require('express-handlebars') 
const { PORT } = require('./config/env')
const routes = require('./routes');

const app = express();

app.engine('hbs', hbs.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');


app.use(express.urlencoded({extended: false}));

app.use(express.static('public'));
app.use(routes);

app.listen(PORT, () => console.log(`Surver is listening on port ${PORT}`))