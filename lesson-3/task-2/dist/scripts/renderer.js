function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.from.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.array.slice.js";
import "core-js/modules/es.array.sort.js";
import "core-js/modules/es.function.name.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.regexp.to-string.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import { getItem } from "./storage.js";
var listElem = document.querySelector(".list");
var createCheckbox = function createCheckbox(_ref) {
  var done = _ref.done,
    id = _ref.id;
  var checkboxElem = document.createElement("input");
  checkboxElem.setAttribute("type", "checkbox");
  checkboxElem.checked = done;
  checkboxElem.classList.add("list__item-checkbox");
  checkboxElem.dataset.id = id;
  return checkboxElem;
};
var createListItem = function createListItem(_ref2) {
  var text = _ref2.text,
    done = _ref2.done,
    id = _ref2.id;
  var listItemElem = document.createElement("li");
  listItemElem.classList.add("list__item");
  var checkboxElem = createCheckbox({
    done: done,
    id: id
  });
  if (done) {
    listItemElem.classList.add("list__item_done");
  }
  var deleteBtnElem = document.createElement("button");
  deleteBtnElem.classList.add("list__item_delete-btn");
  var textElem = document.createElement("span");
  textElem.classList.add("list-item__text");
  textElem.textContent = text;
  listItemElem.append(checkboxElem, textElem, deleteBtnElem);
  return listItemElem;
};
export var renderTasks = function renderTasks() {
  var taskList = getItem("tasksList") || [];
  listElem.innerHTML = "";
  var tasksElems = taskList.sort(function (a, b) {
    return a.done - b.done;
  }).map(createListItem);
  listElem.append.apply(listElem, _toConsumableArray(tasksElems));
};