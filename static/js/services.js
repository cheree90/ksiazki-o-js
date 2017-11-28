function getBooks() {
  return $.ajax({
    url: "/books.json",
    method: "GET"
  });
}
