var spawn = require('child_process').spawn;

exports.run = function (fn) {

  var test = spawn('buster', ['test', '-c', 'test/buster-browser.js'
                                    //, '-r', 'specification'
                                      ]);
  test.stdout.pipe(process.stdout);
  test.stderr.pipe(process.stdout);
  test.on('exit', function () {
    process.nextTick(fn);
  });
};
