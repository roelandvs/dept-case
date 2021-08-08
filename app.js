const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const { tileContent } = require('./data/tileContent');

app
    .use(express.static('./public'))
    .set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index', {data: tileContent})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});