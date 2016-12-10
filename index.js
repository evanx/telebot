let start = (() => {
    var _ref = _asyncToGenerator(function* () {
        api.get('/*', (() => {
            var _ref2 = _asyncToGenerator(function* (ctx) {
                ctx.body = JSON.stringify({ url: ctx.request.url });
            });

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        })());
        app.use(api.routes());
        app.use((() => {
            var _ref3 = _asyncToGenerator(function* (ctx) {
                ctx.statusCode = 501;
            });

            return function (_x2) {
                return _ref3.apply(this, arguments);
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

start().catch(err => {
    logger.error(err);
});
