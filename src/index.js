const assert = require('assert');
const fetch = require('node-fetch');
const lodash = require('lodash');
const logger = require('winston');
const Promise = require('bluebird');

const Koa = require('koa');
const KoaRouter = require('koa-router');
const app = new Koa();
const api = KoaRouter();
const state = {};

const config = {
    port: 8765
};

async function start() {
    api.get('/*', async ctx => {
        ctx.body = JSON.stringify({url: ctx.request.url});
    });
    app.use(api.routes());
    app.use(async ctx => {
       ctx.statusCode = 501;
    });
    state.server = app.listen(config.port);
}

start().catch(err => {
    logger.error(err);
});
