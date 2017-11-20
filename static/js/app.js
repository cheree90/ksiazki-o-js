// ----- main -----
app = (function() {
  var books = [];
  return {
    "start" : start,
    "bookViewSortByPages": bookViewSortByPages,
    "bookViewSortByDate" : bookViewSortByDate,
    "bookViewSortByAuthor" : bookViewSortByAuthor,
    "bookViewFilter" : bookViewFilter,
    "bookCoverOpen" : bookCoverOpen,
    "clearFilters" : clearFilters
  };

  function start(){
    books = getBooks();
    loadFromLocalStorage();
    renderBooks();
  }

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

  // ----- clear -----

  function clearFilters() {
    $('#filterPages').val('');
    $('input[name=sort_option]').prop('checked',false);
    clearSortAll();
    saveFilter();
    books = getBooks();
    renderBooks();
  };

  // ----- modal -----

  function bookCoverOpen(number) {
    var modal = $('#bookCoverLargeWrapper'+number);
    modal.css("display","block");
    $('#close'+number).click(function() {
      modal.css("display","none");
    });
  }

  // ----- filter -----

  function bookViewFilter() {
    saveFilter();
    renderBooks();
  }

  // ----- sort -----

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
})();

// ----- onload -----
$(document).ready(function(){
  app.start();
});

keyPressedMap = {18: false, 82: false};
$(document).keydown(function(e) {
  if (e.keyCode in keyPressedMap) {
      keyPressedMap[e.keyCode] = true;
      if (keyPressedMap[18] && keyPressedMap[82]) {
        app.clearFilters();
      }
  }
}).keyup(function(e) {
  if (e.keyCode in keyPressedMap) {
    keyPressedMap[e.keyCode] = false;
  }
});
