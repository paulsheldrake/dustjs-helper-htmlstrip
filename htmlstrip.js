(function(dust, htmlstrip){
dust.helpers.htmlstrip = function (chunk, ctx, bodies, params) {
  var str = dust.helpers.tap(params.str, chunk, ctx);
  if (!str)
    return chunk.write('');
  var options = {
    include_script: dust.helpers.tap(params.script, chunk, ctx) === 'true',
    include_style: dust.helpers.tap(params.script, chunk, ctx) === 'true',
    compact_whitespace : true
  };
  return chunk.write(htmlstrip.html_strip(str,options).trim());
};
}(typeof exports !== 'undefined' ? module.exports = require('dustjs-linkedin') : dust,
  typeof htmlstrip !== 'undefined' ? htmlstrip : require('htmlstrip-native')
));
