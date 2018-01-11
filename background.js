browser.webRequest.onBeforeRequest.addListener(
    function (details) {
        var address = new URL(details.url);
        address.protocol = "https";
        if (address.hostname.startsWith("m.")) {
            address.hostname = address.hostname.substring(2);
        } else if (address.hostname.indexOf(".m.") !== -1) {
            address.hostname = address.hostname.replace(".m.", ".");
        }
        return {
            redirectUrl: address.href
        };
    }, {
        urls: [
            "*://*.m.mediawiki.org/*",
            "*://*.m.wikibooks.org/*",
            "*://*.m.wikidata.org/*",
            "*://*.m.wikimedia.org/*",
            "*://*.m.wikimediafoundation.org/*",
            "*://*.m.wikinews.org/*",
            "*://*.m.wikipedia.org/*",
            "*://*.m.wikiquote.org/*",
            "*://*.m.wikisource.org/*",
            "*://*.m.wikiversity.org/*",
            "*://*.m.wikivoyage.org/*",
            "*://*.m.wiktionary.org/*"
        ],
        types: [
            "main_frame"
        ]
    }, [
        "blocking"
    ]
);
