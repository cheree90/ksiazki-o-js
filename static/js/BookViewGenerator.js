function bookViewGenerate(bookNumber, bookCoverSmall, bookCoverLarge, bookTitle, bookAuthor, bookReleaseDate, bookPages, bookLink) {

  return `<div class="main"><div class="book-number"><span>${bookNumber}</span></div>
  <div class="book-cover-small-wrapper">
    <img src="${bookCoverSmall}" class="book-cover-small "id="bookCoverSmall${bookNumber}">
  </div>
  <div class="book-cover-large-wrapper" id="bookCoverLargeWrapper${bookNumber}">
    <span id="close${bookNumber}" class="close">&times;</span>
    <img class="book-cover-large" src="${bookCoverLarge}">
  </div>
  <div class="book-description">
    <p class="book-title">${bookTitle}</p>
    <div class="book-line">
      <hr>
    </div>
    <p class="book-author">${bookAuthor}</p>
    <table class="book-elements">
      <tr>
        <td class="book-left"><p class="book-date-pages">Release date:</p></td>
        <td class="book-right"><p class="book-date-pages">${bookReleaseDate}</p></td>
      </tr>
      <tr>
        <td class="book-left"><p class="book-date-pages">Pages:</p></td>
        <td class="book-right"><p class="book-date-pages">${bookPages}</p></td>
      </tr>
      <tr>
        <td class="book-left"><p class="book-link">Link:</p></td>
        <td class="book-right"><p class="book-link"><a href="${bookLink}"> shop</a></p></td>
      </tr>
    </table>
  </div>`;
};
