var express = require('express'),
    app = express(),
    port = process.env.PORT || 4321,
    bodyParser = require('body-parser'),
    cors = require('cors');


app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(bodyParser.json({limit:'50mb'}));
var corsOptions = {
    origin: 'http://localhost/',
    optionsSuccessStatus: 200
}
app.use(cors({ corsOptions }));

//index webserver api
app.get('/', (req, res) => {
    var message = "Rest API LKEConnected";
    res.status(200).json({
        status: true,
        code: 200,
        pesan: message
    });
});

//route /LkeRouter
var LkeRouter = require('./routers/LkeRouter');
app.use('/lke', LkeRouter);

app.listen(port);
console.log('Server API LKE : ' + port);
