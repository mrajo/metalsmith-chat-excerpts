'use strict';

var debug = require('debug')('metalsmith-chat-excerpts');
var extname = require('path').extname;
var extend = require('extend');

function plugin(params) {
  var defaults = {
    lines: 5
  };

  var options = extend(defaults, params);

  return function(files, metalsmith, done){
    setImmediate(done);
    Object.keys(files).forEach(function(file){
      debug('checking file: %s', file);
      if (!is_html(file)) return;
      var data = files[file];
      if (!data.data) return;

      debug('storing excerpt: %s', file);
      var msgs = data.data.slice(0, options.lines + 1);
      var excerpt = '';

      for (var i = 0; i < msgs.length; i++) {
        excerpt += msgs[i].name + ': ' + msgs[i].message + '<br/>';
      }

      data.excerpt = excerpt;
    });
  };
}

function is_html(file){
  return /\.html?/.test(extname(file));
}

module.exports = plugin;
