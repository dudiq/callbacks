function callbacks() {
    const cbs = [];

    function callHandler() {
        for (let i = 0, l = cbs.length; i < l; i++) {
            cbs[i].apply(cbs, arguments);
        }
    }

    callHandler.on = function (cb) {
        cbs.push(cb);
    };
    callHandler.off = function (cb) {
        const pos = cbs.indexOf(cb);
        (pos != -1) && (cbs.splice(pos, 1));
    };
    callHandler.getLength = function () {
        return cbs.length;
    };
    callHandler.clean = function () {
        cbs.length = 0;
    };
    return callHandler;
}

export default callbacks;
