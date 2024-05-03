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
  const bookItem = document.createElement("div");
  bookItem.classList.add("book-item");
  booksList.appendChild(bookItem);

  const bookCover = document.createElement("img");
  bookItem.appendChild(bookCover);
  bookCover.src = `https://source.unsplash.com/190x285/?book&${Math.random()}`;

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

const limit = 6; // Replace with the desired limit
let offset = 0;

// Function to fetch books
const fetchBooks = () => {
  fetch(`https://freetestapi.com/api/v1/books?limit=${limit}&offset=${offset}`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((bookData) => {
        createBook(bookData);
      });
      // Increment offset for next batch
      offset += limit;
    })
    .catch((error) => console.error("Error:", error));
};
//dodac loader

// Load initial books
fetchBooks();

// Event listener for "click to see more" button
loadMoreButton.addEventListener("click", () => {
  fetchBooks();
});

// author:"Harper Lee"
// cover_image:"https://fakeimg.pl/667x1000/cc6600"
// description:"A classic novel depicting racial injustice in the American South."
// genre:['Fiction', 'Classic']
// id:1
// publication_year:1960
// title:"To Kill a Mockingbird"
