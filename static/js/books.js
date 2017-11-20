function renderBooks() {
  $("#main-wrapper").html("");
  var j=0;
  for(var i = 0; i< books.length; i++) {
    var pageCount = $("#filterPages").val();
    if (pageCount==null || pageCount < books[i].pages) {
      j += 1;
      $("#main-wrapper").append(bookViewGenerate(j, books[i].cover.small, books[i].cover.large, books[i].title,
      books[i].author, books[i].releaseDate, books[i].pages, books[i].link));
    }
  }
}

$(document).ready(function(){
  books = getBooks();
  loadFromLocalStorage();
  renderBooks();
});
