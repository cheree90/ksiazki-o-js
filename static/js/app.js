// ----- main -----
app = (()=>{
  var books = [];
  return {
    "start": start,
    "bookViewSortByPages": bookViewSortByPages,
    "bookViewSortByDate": bookViewSortByDate,
    "bookViewSortByAuthor": bookViewSortByAuthor,
    "bookViewFilter": bookViewFilter,
    "bookCoverOpen": bookCoverOpen,
    "clearFilters": clearFilters,
    "getMockedBooks": getMockedBooks, //for tests only
    "setMockedBooks": setMockedBooks //for tests only
  };

  function start(){
    getBooks()
    .done((result)=>{
      books = result;
      parseBooks();
      var appData = loadFromLocalStorage();
      loadPageState(appData);
      renderBooks();
    })
    .fail(()=>{
      console.log("Books download error!");
    });
    addEventListeners();
  }

  function parseBooks() {
    books = books.map((oldBook)=>{
      var newBook = {
        "cover": oldBook.cover,
        "title": oldBook.title,
        "author": oldBook.author,
        "releaseDate": oldBook.releaseDate,
        "pages": oldBook.pages,
        "link": oldBook.link
      };
      var author = oldBook.author.split(" ");
      newBook["authorLastName"] = author[1].toUpperCase();
      var date = oldBook.releaseDate.split("/");
      newBook["parsedDate"] = parseInt(date[0])+(12*date[1]);
      return newBook;
    });
  }

  function renderBooks() {
    $("#main-wrapper").html("");
    var pageCount = $("#filterPages").val();
    books.filter((book)=>{
      return pageCount==null || pageCount < book.pages;
    }).forEach((book,j)=>{
      $("#main-wrapper").append(bookViewGenerate(j+1, book.cover.small, book.cover.large, book.title,
        book.author, book.releaseDate, book.pages, book.link));
        $("#bookCoverSmall"+(j+1)).click(()=>{
          app.bookCoverOpen(j+1);
        });
      });
    }

// ----- clear -----

    function clearFilters() {
      $('#filterPages').val('');
      $('input[name=sort_option]').prop('checked',false);
      clearSortAll();
      saveFilter();
      getBooks()
      .done((result)=>{
        books = result;
        parseBooks();
        renderBooks();
      }
    )
    .fail(()=>{
      console.log("Books download error!");
    });
  }

// ----- modal -----

  function bookCoverOpen(number) {
    var modal = $('#bookCoverLargeWrapper'+number);
    modal.css("display","block");
    $('#close'+number).click(()=>{
      modal.css("display","none");
    });
  }

// ----- filter -----

  function bookViewFilter() {
    saveFilter($('#filterPages').val());
    renderBooks();
  }

// ----- sort -----

  function bookViewSortByPages() {
    saveSortPages();
    books.sort((a, b)=>{
      return parseInt(a.pages) - parseInt(b.pages);
    });
    renderBooks();
  }

  function bookViewSortByDate() {
    saveSortDate();
    books.sort((a, b)=>{
      return a.parsedDate - b.parsedDate;
    });
    renderBooks();
  }

  function bookViewSortByAuthor() {
    saveSortAuthor();
    books.sort((a, b)=>{
      return (a.authorLastName < b.authorLastName) ? -1 : (a.authorLastName > b.authorLastName) ? 1 : 0;
    });
    renderBooks();
  }

  function loadPageState(appData) {
    $('#sortPages').prop("checked", appData.sortRadioButton.sortPages);
    $('#sortDate').prop("checked", appData.sortRadioButton.sortDate);
    $('#sortAuthor').prop("checked", appData.sortRadioButton.sortAuthor);
    $('#filterPages').val(appData.filter);

    if (appData.sortRadioButton.sortPages) {
      app.bookViewSortByPages();
    } else if (appData.sortRadioButton.sortDate) {
      app.bookViewSortByDate();
    } else if (appData.sortRadioButton.sortAuthor) {
      app.bookViewSortByAuthor();
    }
  }

  // ----- event handlers -----

  function addEventListeners() {
    $('#sortPages').click(app.bookViewSortByPages);
    $('#sortDate').click(app.bookViewSortByDate);
    $('#sortAuthor').click(app.bookViewSortByAuthor);
    $('#filterPages').change(app.bookViewFilter);
    $('#clear').click(app.clearFilters);
  }

// ----- for tests only -----

  function getMockedBooks() {
    return books;
  }

  function setMockedBooks(mockedBooks) {
    books = mockedBooks;
    parseBooks();
  }

})();


// ----- on load -----

$(document).ready(()=>{
  app.start();
});

$(document).keydown((e)=>{
  if (e.altKey && e.keyCode == 82) {
    app.clearFilters();
  }
});
