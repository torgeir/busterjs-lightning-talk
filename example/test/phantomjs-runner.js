var server  = require('./phantom/server')
  , tests   = require('./phantom/test-runner')
  , browser = require('./phantom/browser');

server.run(function () {

  var url = 'http://localhost:1111/capture';
  browser.goto(url, function (session) {

    tests.run(function () {
      session.shutdown();
      process.exit();
    });
  });
});
