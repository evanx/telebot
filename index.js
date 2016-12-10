let start = (() => {
    var _ref = _asyncToGenerator(function* () {
        api.get('/echo/*', (() => {
            var _ref2 = _asyncToGenerator(function* (ctx) {
                ctx.body = JSON.stringify({ url: ctx.request.url });
            });

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        })());
        api.post('/webhook/*', (() => {
            var _ref3 = _asyncToGenerator(function* (ctx) {
                ctx.body = '';
                logger.debug('webhook', JSON.stringify(ctx.request, null, 2));
            });

            return function (_x2) {
                return _ref3.apply(this, arguments);
            };
        })());
        app.use(bodyParser());
        app.use(api.routes());
        app.use((() => {
            var _ref4 = _asyncToGenerator(function* (ctx) {
                ctx.statusCode = 501;
            });

            return function (_x3) {
                return _ref4.apply(this, arguments);
            };
        })());
        state.server = app.listen(config.port);
    });

    return function start() {
        return _ref.apply(this, arguments);
    };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const assert = require('assert');
const fetch = require('node-fetch');
const lodash = require('lodash');
const Promise = require('bluebird');

const Koa = require('koa');
const KoaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const api = KoaRouter();
const state = {};

const config = {
    port: 8765
};

const logger = require('winston');
logger.level = config.loggingLevel || 'debug';

start().catch(err => {
    logger.error(err);
});
