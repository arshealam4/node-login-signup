'use strict';

const mongoose = require('mongoose');
const config = require('config');

mongoose.Promise = Promise;
let db = mongoose.createConnection(String(config.get('mongodb')), {
    useNewUrlParser: true
});

db.on('error', console.error.bind(console, 'connection to DB error: '));
db.once('open', function() {
    console.log('[Server]', 'Connection with MongoDB installed');
});

module.exports = db;
