"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
function callbacks() {
    var cbs = [];

    function callHandler() {
        for (var i = 0, l = cbs.length; i < l; i++) {
            cbs[i].apply(cbs, arguments);
        }
    }

    callHandler.on = function (cb) {
        cbs.push(cb);
    };
    callHandler.off = function (cb) {
        var pos = cbs.indexOf(cb);
        pos != -1 && cbs.splice(pos, 1);
    };
    callHandler.getLength = function () {
        return cbs.length;
    };
    callHandler.clean = function () {
        cbs.length = 0;
    };
    return callHandler;
}

exports.default = callbacks;