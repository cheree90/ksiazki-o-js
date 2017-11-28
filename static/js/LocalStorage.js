function saveSortPages() {
  var sortRadioButton = {
    sortPages: true,
    sortDate: false,
    sortAuthor: false
  };
  localStorage.setItem("sortRadioButton", JSON.stringify(sortRadioButton));
}

function saveSortDate() {
  var sortRadioButton = {
    sortPages: false,
    sortDate: true,
    sortAuthor: false
  };
  localStorage.setItem("sortRadioButton", JSON.stringify(sortRadioButton));
}

function saveSortAuthor() {
  var sortRadioButton = {
    sortPages: false,
    sortDate: false,
    sortAuthor: true
  };
  localStorage.setItem("sortRadioButton", JSON.stringify(sortRadioButton));
}

function clearSortAll() {
  var sortRadioButton = {
    sortPages: false,
    sortDate: false,
    sortAuthor: false
  };
  localStorage.setItem("sortRadioButton", JSON.stringify(sortRadioButton));
}

function saveFilter(filter) {
  localStorage.setItem("filter", filter);
}

function loadFromLocalStorage() {
  var sortRadioButton = JSON.parse(localStorage.getItem("sortRadioButton"));
  var filter = localStorage.getItem("filter");
  return {
    sortRadioButton: sortRadioButton,
    filter: filter
  };
}
