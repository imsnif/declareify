'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (file) {
  return (0, _through2.default)(function (buf, enc, next) {
    var string = buf.toString('utf8');
    var result = string.replace(/module.exports\s*=\s*(.+?)\s*=/, "var $1 \nmodule.exports = $1 =");
    this.push(result);
    next();
  });
};

var _through = require('through2');

var _through2 = _interopRequireDefault(_through);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;