let express = require('express');
let exphbs = require('express-handlebars');

let app = express();
const port = 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))