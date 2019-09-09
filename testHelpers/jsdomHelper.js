
var JSDOM = require("jsdom").JSDOM;
var jsdom;

module.exports = function (html) {
	if (typeof document !== 'undefined') {
		return jsdom;
	}

  jsdom = new JSDOM(html || "");
  global.window = jsdom.window;
	global.document = jsdom.window.document;
	global.navigator = {
		userAgent: 'JSDOM'
  };
  // for (let key in global.window) {
  //   if (!global[key]) {
  //     global[key] = global.window[key];
  //   }
  // }
  return jsdom;
};
