const Hapi = require('@hapi/hapi');

const app = Hapi.server({ port: process.env.PORT || 3000 });

app.route({
  method: 'GET',
  path: '/health',
  handler: () => ({ status: 'ok' }),
});

module.exports = app;
