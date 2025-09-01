let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(name, author, pages, read) {
  const book = new Book(name, author, pages, read);
  myLibrary.push(book);
}

function displayBooks() {
  for (let x = 0; x < myLibrary.length; x++) {
    const card = document.querySelector(".card");
    const content = document.createElement("div");
    content.classList.add("card-content")
    content.innerHTML = `
      <h3 class="book-name">${myLibrary[x].name}</h3>
      <p class="book-info">Author: ${myLibrary[x].author}</p>
      <p class="book-info">Pages: ${myLibrary[x].pages}</p>
      <p class="book-info">Read: ${myLibrary[x].read}</p>
    `
    card.appendChild(content)
  }
}

addBookToLibrary("bob", "jeff", "3", "read")
addBookToLibrary("jeff", "jeff", "3", "not read")
addBookToLibrary("bob", "jeff", "3", "read")
addBookToLibrary("jeff", "jeff", "3", "read")
addBookToLibrary("jeff", "jeff", "3", "read")

displayBooks()
console.log(myLibrary)