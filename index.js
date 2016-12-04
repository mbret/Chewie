"use strict";

const requireAll = require('require-all');
const chewie = require("chewie-system");
const path = require("path");
const _ = require("lodash");

// Ensure we're in the project directory, so cwd-relative paths work as expected
// no matter where we actually start from.
process.chdir(__dirname);

// Load custom config
let config = {};
requireAll({
    dirname: path.join(__dirname, "config"),
    recursive: true,
    resolve: function(conf){
        config = _.merge(config, conf);
    }
});

// Start the system
// You don't need anything else after this point.
// The system handle itself completely.
chewie.start(config);