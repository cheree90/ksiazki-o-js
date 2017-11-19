function bookViewGenerate(bookNumber, bookCoverSmall, bookCoverLarge, bookTitle, bookAuthor, bookReleaseDate, bookPages, bookLink) {

  return '<div class="main"><div class="book-number" id="bookNumber"><label>'+bookNumber+'</label></div>'+
    '<div class="book-cover-small">' +
      '<img src="'+bookCoverSmall+'" id="bookCoverSmall'+bookNumber+'" onclick="bookCoverOpen('+bookNumber+')">' +
    '</div>' +
    '<div class="book-cover-large-wrapper" id="bookCoverLargeWrapper'+bookNumber+'">' +
      '<span id ="close'+bookNumber+'" class="close">&times;</span>' +
      '<img class="book-cover-large" src="'+bookCoverLarge+'">' +
    '</div>' +
    '<div class="book-description">' +
    '<p class="book-title" id="bookTitle">'+bookTitle+'</p>' +
    '<div class="book-line">' +
      '<hr>' +
    '</div>' +
      '<p class="book-author" id="bookAuthor">'+bookAuthor+'</p>' +
      '<div class="book-elements">' +
        '<div class="book-left">' +
          '<p class="book-date-pages">Release Date: </p>' +
          '<p class="book-date-pages">Pages: </p>' +
          '<p class="book-link">Link: </p>' +
        '</div>' +
        '<div class="book-right">' +
          '<p class="book-date-pages" id="bookDate">'+bookReleaseDate+'</p>' +
          '<p class="book-date-pages" id="bookPages">'+bookPages+'</p>' +
          '<p class="book-link" id="bookLink"><a href="'+bookLink+'"> shop</a></p>' +
        '</div>' +
    '</div>' +
    '</div>' +
  '</div>';
};
