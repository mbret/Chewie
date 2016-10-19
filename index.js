"use strict";

var requireAll = require('require-all');
var MyBuddy = require("my-buddy-system");
var path = require("path");
var _ = require("lodash");

// Load custom config
var config = {};
requireAll({
    dirname     : path.join(__dirname, "config"),
    recursive   : true,
    resolve     : function(conf){
        config = _.merge(config, conf);
    }
});

// Start the system
// You don't need anything else after this point.
// The system handle itself completely.
MyBuddy.start(config);