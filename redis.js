const redis = require('redis');

const client = redis.createClient({
    url: "redis://redis:6379",
    legacyMode: true,
});

module.exports = client;