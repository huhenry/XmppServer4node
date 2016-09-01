var winston = require('winston');
require('./index');

var myCustomLevels = {
  levels: {
    foo: 0,
    bar: 1,
    baz: 2,
    foobar: 3
  },
  colors: {
    foo: 'blue',
    bar: 'green',
    baz: 'yellow',
    foobar: 'red'
  }
};

var fileTransportOpts = {
  filename: './colorize.log',
  colorize: true
};

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.DailyRotateFile)(fileTransportOpts)
  ],
  levels: myCustomLevels.levels
});

logger.foobar('Hello created log files!');
