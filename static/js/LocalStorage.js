function saveSortPages() {
  localStorage.setItem("sortPages", true);
  localStorage.setItem("sortDate", false);
  localStorage.setItem("sortAuthor", false);
}

function saveSortDate() {
  localStorage.setItem("sortDate", true);
  localStorage.setItem("sortPages", false);
  localStorage.setItem("sortAuthor", false);
}

function saveSortAuthor() {
  localStorage.setItem("sortAuthor", true);
  localStorage.setItem("sortPages", false);
  localStorage.setItem("sortDate", false);
}

function clearSortAll() {
  localStorage.setItem("sortPages", false);
  localStorage.setItem("sortDate", false);
  localStorage.setItem("sortAuthor", false);
}

function saveFilter() {
  filter = $('#filterPages').val();
  localStorage.setItem("filter", filter);
}

function loadFromLocalStorage() {
  var sortPages = localStorage.getItem("sortPages") == "true";
  var sortDate = localStorage.getItem("sortDate") == "true";
  var sortAuthor = localStorage.getItem("sortAuthor") == "true";
  var filter = localStorage.getItem("filter");

  $('#sortPages').prop("checked", sortPages);
  $('#sortDate').prop("checked", sortDate);
  $('#sortAuthor').prop("checked", sortAuthor);
  $('#filterPages').val(filter);

  if (sortPages) {
    bookViewSortByPages();
  } else if (sortDate) {
    bookViewSortByDate();
  } else if (sortAuthor) {
    bookViewSortByAuthor();

  }
}
