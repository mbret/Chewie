'use strict';

/**
 *
 * Note that the system may restart automatically
 * .start() is protected against worker cluster but all the code
 * written here will be called twice.
 */

var config          = require('./config.js');
var MyBuddySystem   = require('my-buddy-system');

// Use your own custom plugins repository
MyBuddySystem.registerNewPluginDirectory('./plugins');

// Use your own config
MyBuddySystem.registerNewConfig(config);

// Start the system
// You don't need anything else after this point.
// The system handle itself completely.
MyBuddySystem.start();