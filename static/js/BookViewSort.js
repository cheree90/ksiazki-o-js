function bookViewSortByPages() {
  saveSortPages();
  books.sort(function(a, b) {
      return parseInt(a.pages) - parseInt(b.pages);
  });
  renderBooks();
}

function bookViewSortByDate() {
  saveSortDate();
  books.sort(function(a, b) {
    var aDate = a.releaseDate.split("/");
    var bDate = b.releaseDate.split("/");
    return (parseInt(aDate[0])+(12*aDate[1])) - (parseInt(bDate[0])+(12*bDate[1]));
  });
  renderBooks();
}

function bookViewSortByAuthor() {
  saveSortAuthor();
  books.sort(function(a, b) {
    var aAuthor = a.author.split(" ");
    var bAuthor = b.author.split(" ");
    var aName = aAuthor[1].toUpperCase();
    var bName = bAuthor[1].toUpperCase();
    return (aName < bName) ? -1 : (aName > bName) ? 1 : 0;
  });
  renderBooks();
}
