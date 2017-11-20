function bookCoverOpen(number) {
  modal = $('#bookCoverLargeWrapper'+number);
  modal.css("display","block");
  $('#close'+number).click(function() {
    modal.css("display","none");
  });
}
