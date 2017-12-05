/**
 * Created by whc on 2017/12/5.
 */
const express = require('express');
const bodyParser = require('body-parser');
const glob = require('glob');
const app = express();


// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const controllers = glob.sync(`${__dirname}/apis/**/*.js`);
controllers.forEach((controller) => {
    /* eslint-disable */
    require(controller)(app);
    /* eslint-disable */
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    let message = err.message;

    if (err.response && err.response.body) {
        message = err.response.body.Message || err.response.body.message;
    }
    res.render('error', {
        message,
        error: err,
    });
});


const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf-8'));
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? `pipe ${addr}`
        : `port ${addr.port}`;
    console.log('Listening on ' + bind, 'version', packageJson.version);
}

module.exports = app;