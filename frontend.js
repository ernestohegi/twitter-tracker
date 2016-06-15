'use strict';

const PORT = 3000;

let routeIndex      = require('./routes/index');
let path            = require('path');
let express         = require('express');
let io              = require('socket.io');
let http            = require('http');
let consolePrinter  = require('./modules/console-printer-module.js');
let app             = express();
let server          = http.createServer(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routeIndex);

server.listen(PORT, () => console.log('Listening at port ' + PORT));

let listener = io.listen(server);

listener.sockets.on('connection', socket => {
    consolePrinter.printWithSeparatorAndSpaces('User connected');
});
