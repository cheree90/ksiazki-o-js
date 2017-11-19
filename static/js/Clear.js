function clearFilters() {
  $('#filterPages').val('');
  $('input[type=radio]').attr('checked',false);
  renderBooks();
};
