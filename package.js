Package.describe({
    summary: "String.js - A dead simple, customizable plain text parser for JS - ported to meteor",
    version: "2.1.0",
    git: "https://github.com/strikeout/meteor-string.js"
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@0.9.3');
    api.use('underscore');
    api.addFiles('lib/string.js', ['client','server']);
});
