Package.describe({
    summary: "String.jsA dead simple, customizable plain text parser for JS",
    version: "1.0.0",
    git: " \* Fill me in! *\ "
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@0.9.3');
    api.use('underscore');
    api.addFiles('lib/string.js', 'client');
});
