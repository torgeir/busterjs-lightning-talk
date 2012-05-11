var phantom = require('phantom');

exports.goto = function (url, fn) {

  phantom.create(function (p) { 
    var context = { shutdown : function () { p.exit(); } };
    var page = p.createPage(function (page) {
      page.open(url, function () {
        fn(context);
      });
    });
  });
};
