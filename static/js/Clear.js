function clearFilters() {
  $('#filterPages').val('');
  $('input[name=sort_option]').prop('checked',false);
  clearSortAll();
  saveFilter();
  books = getBooks();
  renderBooks();
};

map = {18: false, 82: false};
$(document).keydown(function(e) {
  if (e.keyCode in map) {
      map[e.keyCode] = true;
      if (map[18] && map[82]) {
        clearFilters();
      }
}
}).keyup(function(e) {
if (e.keyCode in map) {
  map[e.keyCode] = false;
}
});
