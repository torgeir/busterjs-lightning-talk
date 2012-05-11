(function (context) {

  context.MathGenious = { sum: sum };

  function sum () {
    var i, len, sum = 0;
    for (i = 0, len = arguments.length; i < len; i += 1) {
      sum += arguments[i];
    }
    return sum;
  }

})(this);
