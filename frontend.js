'use strict';

const PORT = 3000;

const routeIndex      = require('./routes/index'),
      path            = require('path'),
      express         = require('express'),
      io              = require('socket.io'),
      http            = require('http'),
      consolePrinter  = require('./modules/console-printer-module.js'),
      app             = express(),
      server          = http.createServer(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routeIndex);

server.listen(PORT, () => consolePrinter.print('Listening at port ' + PORT));

// Initialize Socket.io
let listener = io.listen(server);

listener.sockets.on('connection', socket => {
    consolePrinter.printWithSeparatorAndSpaces('User connected');
});
