'use strict';

/**
 *
 * Note that the system may restart automatically
 * .start() is protected against worker cluster but all the code
 * written here will be called twice.
 */

var MyBuddySystem   = require('my-buddy-system');

// Start the system
// You don't need anything else after this point.
// The system handle itself completely.
MyBuddySystem.start();