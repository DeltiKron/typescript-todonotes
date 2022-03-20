"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Form(props) {
    return (react_1["default"].createElement("form", null,
        react_1["default"].createElement("h2", { className: "label-wrapper" },
            react_1["default"].createElement("label", { htmlFor: "new-todo-input", className: "label__lg" }, "What needs to be done?")),
        react_1["default"].createElement("input", { type: "text", id: "new-todo-input", className: "input input__lg", name: "text", autoComplete: "off" }),
        react_1["default"].createElement("button", { type: "submit", className: "btn btn__primary btn__lg" }, props.buttonLabel)));
}
exports["default"] = Form;
;
