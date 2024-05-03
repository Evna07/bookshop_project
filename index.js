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

//uwaga, tutaj dzieje sie magia wyswitlania ksiazek
const booksList = document.querySelector(".books-list");
const createBook = (data) => {
  let bookItem = document.createElement("div");
  bookItem.classList.add("book-item");
  booksList.appendChild(bookItem);

  let bookCover = document.createElement("img");
  bookItem.appendChild(bookCover);
  bookCover.src = data.cover_image;

  let bookTitle = document.createElement("h4");
  bookItem.appendChild(bookTitle);
  bookTitle.textContent = data.title;

  let bookAuthor = document.createElement("h5");
  bookAuthor.textContent = data.author;
  bookItem.appendChild(bookAuthor);

  let bookPrice = document.createElement("p");
  bookPrice.textContent = `${(Math.random() * 10).toFixed(2)} EUR`;
  bookItem.appendChild(bookPrice);
};

const limit = 20; // Replace with the desired limit

fetch(`https://freetestapi.com/api/v1/books?limit=${limit}`)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((bookData) => {
      createBook(bookData);
    });
  })
  .catch((error) => console.error("Error:", error));

// author:"Harper Lee"
// cover_image:"https://fakeimg.pl/667x1000/cc6600"
// description:"A classic novel depicting racial injustice in the American South."
// genre:['Fiction', 'Classic']
// id:1
// publication_year:1960
// title:"To Kill a Mockingbird"
