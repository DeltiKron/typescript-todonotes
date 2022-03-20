"use strict";
exports.__esModule = true;
var react_1 = require("react");
function FilterButton() {
    return (react_1["default"].createElement("button", { type: "button", className: "btn toggle-btn", "aria-pressed": "true" },
        react_1["default"].createElement("span", { className: "visually-hidden" }, "Show "),
        react_1["default"].createElement("span", null, "all"),
        react_1["default"].createElement("span", { className: "visually-hidden" }, " tasks")));
}
exports["default"] = FilterButton;
