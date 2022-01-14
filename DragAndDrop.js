var dataTransfer = {
    dropEffect: "",
    effectAllowed: "all",
    files: [],
    items: {},
    types: [],
    setData: function (format, data) {
        this.items[format] = data;
        this.types.push(format);
    },
    getData: function (format) {
        return this.items[format];
    },
    clearData: function (format) { },
};
var emulate = function (event, target) {
    var evt = document.createEvent("Event");
    evt.initEvent(event, true, false);
    evt.dataTransfer = dataTransfer;
    target.dispatchEvent(evt);
};

function getElementByXpath(path) {
    return document.evaluate(
        path,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
    ).singleNodeValue;
}

var DragNDrop = function (src, tgt) {
    src = getElementByXpath(src);
    tgt = getElementByXpath(tgt);
    emulate("dragstart", src);
    emulate("dragenter", tgt);
    emulate("dragover", tgt);
    emulate("drop", tgt);
    emulate("dragend", src);
    return true;
};
