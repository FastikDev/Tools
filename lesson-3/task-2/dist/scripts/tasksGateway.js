function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["id"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.symbol.to-primitive.js";
import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.array.filter.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.date.to-primitive.js";
import "core-js/modules/es.number.constructor.js";
import "core-js/modules/es.object.get-own-property-descriptor.js";
import "core-js/modules/es.object.get-own-property-descriptors.js";
import "core-js/modules/es.object.keys.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.promise.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.for-each.js";
import "core-js/modules/web.dom-collections.iterator.js";
var baseUrl = 'https://666c261a49dbc5d7145cd879.mockapi.io/api/v1/tasks';
var mapTasks = function mapTasks(tasks) {
  return tasks.map(function (_ref) {
    var id = _ref.id,
      rest = _objectWithoutProperties(_ref, _excluded);
    return _objectSpread(_objectSpread({}, rest), {}, {
      id: id
    });
  });
};
export var getTasksList = function getTasksList() {
  return fetch(baseUrl).then(function (response) {
    return response.json();
  }).then(function (tasks) {
    return mapTasks(tasks);
  });
};
export var createTask = function createTask(taskData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData)
  });
};
export var updateTask = function updateTask(taskId, updatedTaskData) {
  return fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(updatedTaskData)
  });
};
export var deleteTask = function deleteTask(taskId) {
  return fetch("".concat(baseUrl, "/").concat(taskId), {
    method: 'DELETE'
  });
};