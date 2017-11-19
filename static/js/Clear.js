function clearFilters() {
  $('#filterPages').val('');
  $('input[name=sort_option]').prop('checked',false);
  books = getBooks();
  renderBooks();
};
