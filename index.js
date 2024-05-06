import { booksListed } from "./books.js";

const menuList = document.querySelector(".menu-list-container");
const menuItems = document.querySelectorAll(".menu-item");
const burger = document.querySelector(".burger");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");

const toggleMenu = () => {
  if (menuList.classList.contains("show-menu-list")) {
    menuList.classList.remove("show-menu-list");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menuList.classList.add("show-menu-list");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
};

burger.addEventListener("click", toggleMenu);

//it's some kind of magic~
const booksList = document.querySelector(".books-list");
const loadMoreButton = document.querySelector("#booksListBtn");

const createBook = (data) => {
  const bookItem = document.createElement("li");
  bookItem.classList.add("book-item");
  booksList.appendChild(bookItem);

  const bookCover = document.createElement("img");
  bookItem.appendChild(bookCover);
  bookCover.src = data.cover_image;

  const bookTitle = document.createElement("h4");
  bookItem.appendChild(bookTitle);
  bookTitle.textContent = data.title;

  const bookAuthor = document.createElement("h5");
  bookAuthor.textContent = data.author;
  bookItem.appendChild(bookAuthor);

  const bookPrice = document.createElement("p");
  bookPrice.textContent = `${(Math.random() * 10).toFixed(2)} EUR`;
  bookItem.appendChild(bookPrice);

  const favBtn = document.createElement("button");
  bookItem.appendChild(favBtn);
  const favIcon = document.createElement("i");
  favIcon.className = "fa-solid fa-heart";
  favBtn.appendChild(favIcon);
  favBtn.classList.add("fav-btn");
};

let currentOffset = 0;
const booksPerPage = 6;

const fetchBooks = () => {
  const books = booksListed.flat();
  const endOffset = currentOffset + booksPerPage;

  for (let i = currentOffset; i < endOffset && i < books.length; i++) {
    createBook(books[i]);
  }

  currentOffset += booksPerPage;

  // Optionally disable the button if there are no more books to load
  if (currentOffset >= books.length) {
    loadMoreButton.disabled = true;
    loadMoreButton.classList.add("disabled");
  }
};

document.addEventListener("DOMContentLoaded", fetchBooks);

// Event listener for "click to see more" button
loadMoreButton.addEventListener("click", () => {
  fetchBooks();
});


//no nie dziala
const bookSearch = () => {
  const searchInput = document.getElementById("searchbar").value.toLowerCase();
  const books = document.querySelectorAll(".book-item");

  console.log(searchInput, books);

  books.forEach((book) => {
    const title = book.querySelector("h4").textContent.toLowerCase();
    const author = book.querySelector("h5").textContent.toLowerCase();

    if (title.includes(searchInput) || author.includes(searchInput)) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
};

// Event listener for keyup event delegated to the document
document.addEventListener("keyup", (event) => {
  if (event.target.matches("#searchbar")) {
    bookSearch();
  }
});
