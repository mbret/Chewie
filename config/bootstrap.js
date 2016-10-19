"use strict";

class Bootstrap {

    /**
     * This function is executed during the process startup. You can run some task that need to be initialized before system
     * is ready and started.
     * @param system
     * @param done
     * @returns {*}
     */
    bootstrap(system, done) {
        return done();
    }
}

module.exports.bootstrap = Bootstrap;