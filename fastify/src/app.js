const fastify = require('fastify')();

fastify.get('/health', async () => ({ status: 'ok' }));

module.exports = fastify;
