// Module oma/legal
// Handles inserting the custom legal disclaimer text

import { pub } from "core/pubsubhub";

export function run(conf, doc, cb) {
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
}