var config = module.exports;
config['node tests'] = {

  env: 'node',

  rootPath: '../',

  tests: [
    'test/*-test.js' 
  ]
};

config['browser tests'] = {

  env: 'browser',

  rootPath: '../',

  sources: [
    'lib/*.js'
  ],

  tests: [
    'test/*-test.js' 
  ]
};
