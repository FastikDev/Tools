import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.array.sort.js";
import "core-js/modules/web.dom-collections.iterator.js";
import { getItem } from "./storage.js";
const listElem = document.querySelector(".list");
const createCheckbox = _ref => {
  let {
    done,
    id
  } = _ref;
  const checkboxElem = document.createElement("input");
  checkboxElem.setAttribute("type", "checkbox");
  checkboxElem.checked = done;
  checkboxElem.classList.add("list__item-checkbox");
  checkboxElem.dataset.id = id;
  return checkboxElem;
};
const createListItem = _ref2 => {
  let {
    text,
    done,
    id
  } = _ref2;
  const listItemElem = document.createElement("li");
  listItemElem.classList.add("list__item");
  const checkboxElem = createCheckbox({
    done,
    id
  });
  if (done) {
    listItemElem.classList.add("list__item_done");
  }
  const deleteBtnElem = document.createElement("button");
  deleteBtnElem.classList.add("list__item_delete-btn");
  const textElem = document.createElement("span");
  textElem.classList.add("list-item__text");
  textElem.textContent = text;
  listItemElem.append(checkboxElem, textElem, deleteBtnElem);
  return listItemElem;
};
export const renderTasks = () => {
  const taskList = getItem("tasksList") || [];
  listElem.innerHTML = "";
  const tasksElems = taskList.sort((a, b) => a.done - b.done).map(createListItem);
  listElem.append(...tasksElems);
};