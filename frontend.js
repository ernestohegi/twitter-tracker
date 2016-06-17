'use strict';

const routeIndex      = require('./routes/index'),
      path            = require('path'),
      express         = require('express'),
      io              = require('socket.io'),
      http            = require('http'),
      consolePrinter  = require('./modules/console-printer-module.js'),
      configuration   = require('./data/configuration.js'),
      app             = express(),
      server          = require('http').Server(app);

io.listen(server);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routeIndex);

server.listen(
    configuration.main.port,
    () => consolePrinter.print('Listening at port ' + configuration.main.port)
);
