/*global define*/
define(function (require) {
    'use strict';

    var local, language;

    language = require('config/application').locale;
    local = require('config/locales/' + language);

    return local;

});