var busterTestCli = require("buster-test-cli");

exports.run = function (fn) {

  var server = busterTestCli.cli.server.create();
  server.run();
  fn(server);
};
