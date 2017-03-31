const fs = require('fs-extra');

// create settings.json if needed
fs.copySync(__dirname + "/settings.json.tmpl", __dirname + "/../settings.json", {
    overwrite: false
});