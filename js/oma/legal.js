define(["exports", "core/pubsubhub"], function (exports, _pubsubhub) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.run = run;
    function run(conf, doc, cb) {
        var $legal = $('#legal');

        if ($legal.length) {
            if ($legal.find("p").length === 0) $legal.contents().wrapAll($("<p></p>"));
            $legal.prepend("<h2>" + conf.l10n.legal + "</h2>");
            $legal.addClass("legal");
            if (conf.legalDisclaimer) {
                $legal.prepend(conf.legalDisclaimer);
            }
        }

        cb();
    } // Module oma/legal
    // Handles inserting the custom legal disclaimer text
});
//# sourceMappingURL=legal.js.map