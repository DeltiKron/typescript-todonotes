"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Todo(props) {
    return (react_1["default"].createElement("li", { className: "todo stack-small" },
        react_1["default"].createElement("div", { className: "c-cb" },
            react_1["default"].createElement("input", { id: props.id, type: "checkbox", defaultChecked: props.completed }),
            react_1["default"].createElement("label", { className: "todo-label", htmlFor: "todo-0" }, props.title)),
        react_1["default"].createElement("div", { className: "btn-group" },
            react_1["default"].createElement("button", { type: "button", className: "btn" },
                "Edit ",
                react_1["default"].createElement("span", { className: "visually-hidden" }, "Eat")),
            react_1["default"].createElement("button", { type: "button", className: "btn btn__danger" },
                "Delete ",
                react_1["default"].createElement("span", { className: "visually-hidden" }, "Eat")))));
}
exports["default"] = Todo;
