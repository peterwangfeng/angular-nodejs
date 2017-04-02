/**
 * Created by WangFeng on 2017/2/28.
 */
const express = require('express'),
    bodyParser = require('body-parser');

const app = express();
app.use(express.static('www'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(require('./routers/register'));
app.use(require('./routers/login'));
app.use(require('./routers/add'));
app.use(require('./routers/remove'));
app.use(require('./routers/search'));
app.use(require('./routers/update'));

app.listen(3000, () => {
    console.log('server running at port 3000');
});
