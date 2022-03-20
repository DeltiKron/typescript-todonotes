"use strict";
exports.__esModule = true;
var FilterButton_1 = require("./components/FilterButton");
var Form_1 = require("./components/Form");
var Todo_1 = require("./components/Todo");
function App(props) {
    var _a;
    var taskList = (_a = props.tasks) === null || _a === void 0 ? void 0 : _a.map(function (task) { return React.createElement(Todo_1["default"], { id: task.id, title: task.title, completed: task.completed }); });
    return (React.createElement("div", { className: "todoapp stack-large" },
        React.createElement("h1", null, "TodoMatic"),
        React.createElement(Form_1["default"], { buttonLabel: "Add to List!" }),
        React.createElement("div", { className: "filters btn-group stack-exception" },
            React.createElement(FilterButton_1["default"], null),
            React.createElement(FilterButton_1["default"], null),
            React.createElement(FilterButton_1["default"], null)),
        React.createElement("h2", { id: "list-heading" }, "3 tasks remaining"),
        React.createElement("ul", { role: "list", className: "todo-list stack-large stack-exception", "aria-labelledby": "list-heading" }, taskList)));
}
exports["default"] = App;
