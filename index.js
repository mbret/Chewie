"use strict";

// Ensure we're in the project directory, so cwd-relative paths work as expected
// no matter where we actually lift from.
process.chdir(__dirname);

const chewie = require("chewie-system");
const path = require("path");

// Start the system
chewie.start({
    settings: path.join(__dirname, "config/settings.json")
});