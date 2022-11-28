const redis = require('redis');

const client = redis.createClient({
    url: process.env.REDIS_PORT,
    legacyMode: true,
});

module.exports = client;