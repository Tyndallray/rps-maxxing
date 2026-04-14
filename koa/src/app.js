const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/health', (ctx) => {
  ctx.body = { status: 'ok' };
});

app.use(router.routes());

module.exports = app;
