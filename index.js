const express = require('express');
const app = express();
const cors = require('cors');
const env = require('dotenv')
env.config({ path: './models/config.env' });
const corsOptions = {
    origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./models/index');
const path = require('path');
const hbs = require('hbs');
app.set('views', path.join(__dirname, "./views/"));
app.set('view engine', 'hbs');
var task_route = require('./routes/task_route');
app.use('/api/', task_route);
app.get('/', async (req, res) => {
    res.render('index');
})
app.listen(3000);