module.exports = {

    // All database relative configuration goes in this place
    sharedDatabase: {
        connexion: {
            // Control database state at every startup
            // 'true' the database is wiped every startup
            // 'false' default value, no drop
            dropOnStartup: true
        }
    }
};