define(["exports", "deps/text!oma/css/oma-base.css"], function (exports, _omaBase) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.run = run;

  var _omaBase2 = _interopRequireDefault(_omaBase);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // Opportunistically inserts the style, with the chance to reduce some FOUC
  var styleElement = document.createElement("style"); // Module oma/style
  // Inserts the CSS that ReSpec uses into the document.
  //
  // IMPORTANT NOTE
  //  To add you own styles, create a plugin that declares the css as a dependency
  //  and create a build of your new ReSpec profile.
  //
  // CONFIGURATION
  //  - noReSpecCSS: if you're using a profile that loads this module but you don't want
  //    the style, set this to true

  styleElement.id = "oma-mainstyle";
  styleElement.textContent = _omaBase2.default;
  document.head.appendChild(styleElement);

  function run(conf, doc, cb) {
    if (conf.noReSpecCSS) {
      styleElement.remove();
    }
    cb();
  }
});
//# sourceMappingURL=oma-basestyle.js.map