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

let counter = 0

function displayBooks() {
  document.addEventListener("DOMContentLoaded", () => {
    for (counter; counter < myLibrary.length; counter++) {
      const card = document.querySelector(".card");
      const content = document.createElement("div");
      content.classList.add("card-content")
      content.dataset.id = myLibrary[counter].id;
      content.innerHTML = `
        <h3 class="book-name">${myLibrary[counter].name}</h3>
        <p class="book-info">Author: ${myLibrary[counter].author}</p>
        <p class="book-info">Pages: ${myLibrary[counter].pages}</p>
        <p class="book-info">Read: ${myLibrary[counter].read}</p>
        <button class="deleteButton">Delete</button>
      `;

      const deleteButton = content.querySelector(".deleteButton")
      deleteButton.addEventListener("click", () => {
        deleteBook(myLibrary[counter])
      });
      card.appendChild(content)
    };
  });
}

function deleteBook(id) {
  if (id === content.getAttribute("data-id")) {
    myLibrary.splice(myLibrary[counter], 1)
    displayBooks()
  }
}

addBookToLibrary("bob", "jeff", "3", "Read")
addBookToLibrary("jeff", "jeff", "3", "Not read")
addBookToLibrary("bob", "jeff", "3", "Read")
addBookToLibrary("jeff", "jeff", "3", "Read")
addBookToLibrary("jeff", "jeff", "3", "Read")

displayBooks()

console.log(myLibrary)

const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", (event) => {
  event.preventDefault()
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").value;

  dialog.close()
  addBookToLibrary(title, author, pages, read);
  displayBooks()
});

const body = document.querySelector("body");
const dialog = document.querySelector("dialog");
const addBook = document.querySelector(".addBook");
const closeButton = document.querySelector(".close");

addBook.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});