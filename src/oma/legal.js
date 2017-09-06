// Module oma/legal
// Handles inserting the custom legal disclaimer text

import { pub } from "core/pubsubhub";

export function run(conf, doc, cb) {
    var $head = $('.head');

    // if not conf.legalDisclaimer set, then use this as the default text
    if (!conf.legalDisclaimer) {
        $head.append(document.createElement("section"));
        var $legal = $head.find('section');
        $legal.addClass("legal");
        if ($legal.find("p").length === 0) $legal.contents().wrapAll($("<p></p>"));
        $legal.prepend("<h2>" + conf.l10n.legal + "</h2>");

        $legal.append("<p class='copyright'> \
            Redistribution and use in source and binary forms, with or without \
            modification, are permitted provided that the following conditions \
            are met: \
        <\/p> \
        <p class='copyright'> \
            1. Redistributions of source code must retain the above copyright \
            notice, this list of conditions and the following disclaimer. \
            2. Redistributions in binary form must reproduce the above copyright \
            notice, this list of conditions and the following disclaimer in the \
            documentation and/or other materials provided with the distribution. \
            3. Neither the name of the copyright holder nor the names of its \
            contributors may be used to endorse or promote products derived \
            from this software without specific prior written permission. \
        <\/p> \
        <p class='copyright'> \
            THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \
            \"AS IS\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT \
            LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS \
            FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE \
            COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, \
            INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, \
            BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; \
            LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER \
            CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT \
            LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN \
            ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE \
            POSSIBILITY OF SUCH DAMAGE. \
        <\/p> \
        <p class='copyright'> \
            The above license is used as a license under copyright only.  Please \
            reference the OMA IPR Policy for patent licensing terms: \
            http://www.openmobilealliance.org/ipr.html \
        <\/p> \
        ")
    
    }

    cb();
}