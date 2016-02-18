'use strict';

/**
 *
 * Note that the system may restart automatically
 * .start() is protected against worker cluster but all the code
 * written here will be called twice.
 */

var cluster         = require('cluster');
var MyBuddySystem   = require('./index.js');

// Custom config
var config          = require('./config.js');

// Use your own custom plugins repository
MyBuddySystem.registerNewPluginDirectory(__dirname + '/_plugins');

// Use your own config
MyBuddySystem.registerNewConfig(config);

// Start the system
// You don't need anything else after this point.
// The system handle itself completely.
MyBuddySystem.start();