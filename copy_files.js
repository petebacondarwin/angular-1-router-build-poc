var fs = require('fs-extra');

var ROUTER_LIB_FOLDER = __dirname + '/node_modules/angular2/src/router';
var OVERRIDE_FOLDER = __dirname + '/overrides';
var SRC_FOLDER = __dirname + '/src';
var TMP_FOLDER = __dirname + '/tmp';
var ROUTER_TMP_FOLDER = TMP_FOLDER + '/router';

console.log('Copying files');
fs.emptyDirSync(TMP_FOLDER);
fs.copySync(ROUTER_LIB_FOLDER, ROUTER_TMP_FOLDER);
fs.copySync(OVERRIDE_FOLDER, ROUTER_TMP_FOLDER);
fs.copySync(SRC_FOLDER, TMP_FOLDER);
