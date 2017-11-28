describe("Test app ", function() {
  var mockedBooks = [
    {
      "cover": {
        "large": "https://covers.oreillystatic.com/images/9780596000486/lrg.jpg",
        "small": "https://covers.oreillystatic.com/images/9780596000486/cat.gif"
      },
      "title": "JavaScript: The Definitive Guide",
      "author": "David Flanagan",
      "releaseDate": "11/2001",
      "pages": 936,
      "link": "http://shop.oreilly.com/product/9780596000486.do"
    },
    {
      "cover": {
        "large": "https://covers.oreillystatic.com/images/0636920033141/lrg.jpg",
        "small": "https://covers.oreillystatic.com/images/0636920033141/cat.gif"
      },
      "title": "Programming JavaScript Applications",
      "author": "Eric Elliott",
      "releaseDate": "07/2014",
      "pages": 254,
      "link": "http://shop.oreilly.com/product/0636920033141.do"
    },
    {
      "cover": {
        "large": "https://covers.oreillystatic.com/images/0636920027713/lrg.jpg",
        "small": "https://covers.oreillystatic.com/images/0636920027713/cat.gif"
      },
      "title": "JavaScript Enlightenment",
      "author": "Cody Lindley",
      "releaseDate": "12/2012",
      "pages": 166,
      "link": "http://shop.oreilly.com/product/0636920027713.do"
    },
  ];

  beforeEach(function() {
    app.setMockedBooks(mockedBooks);
  });

  describe("sort", function() {
    it("by date", function() {
      app.bookViewSortByDate();
      var sortedBooks = app.getMockedBooks();
      expect(sortedBooks[0].title).toBe("JavaScript: The Definitive Guide");
      expect(sortedBooks[1].title).toBe("JavaScript Enlightenment");
      expect(sortedBooks[2].title).toBe("Programming JavaScript Applications");
    });

    it("by author", function() {
      app.bookViewSortByAuthor();
      var sortedBooks = app.getMockedBooks();
      expect(sortedBooks[0].title).toBe("Programming JavaScript Applications");
      expect(sortedBooks[1].title).toBe("JavaScript: The Definitive Guide");
      expect(sortedBooks[2].title).toBe("JavaScript Enlightenment");
    });

    it("by pages", function() {
      app.bookViewSortByPages();
      var sortedBooks = app.getMockedBooks();
      expect(sortedBooks[0].title).toBe("JavaScript Enlightenment");
      expect(sortedBooks[1].title).toBe("Programming JavaScript Applications");
      expect(sortedBooks[2].title).toBe("JavaScript: The Definitive Guide");
    });
  });


  describe("filter", function() {

    it("by page count", function() {
      var testFilter = 200;
      app.bookViewTestFilter(testFilter);
      var filteredBooks = app.getMockedBooks();
      expect(filteredBooks[0].pages).not.toBeLessThan(200);
      expect(filteredBooks[1].pages).not.toBeLessThan(200);
      expect(filteredBooks[2].pages).not.toBeLessThan(200);
    });

    it("empty filter", function() {

    });
  });
});
