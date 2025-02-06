
// extending the book objects
// all book objects are to be stored in array - constructor code
// add a separate function to the script (not inside the constructor) that can take some arguments, create a book from those arguments, and store the new book object into an array. 
// new function to loop through array to display each book
// display in some sort of table, on each on own card

const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}


function displayBooks() {
    const libraryContainer = document.getElementById("library-container");
    libraryContainer.innerHTML = ""; // clear previous container

    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book-card");
        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Read:</strong> ${book.isRead ? "Yes" : "No"}<p>
            <hr>
        `;
        libraryContainer.appendChild(bookDiv);
    });
}

document.getElementById("new-book-btn").addEventListener("click", () => {
    document.getElementById("book-dialog").showModal();
});

document.getElementById("close-dialog").addEventListener("click", () => {
    document.getElementById("book-dialog").closest();
});

document.getElementById("book-form").addEventListener("submit", (event) => {
    event.preventDefault();  // prevents page reload

    // Get form values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("isRead").checked;

    // Add new book and update UI
    addBookToLibrary(title, author, pages, isRead);
    displayBooks();

    // Close dialog and reset form
    document.getElementById("book-dialog").close();
    document.getElementById("book-form").reset();
})

addBookToLibrary("The Hobbit", "J. R. R. Tolkien", 310, true);
addBookToLibrary("1984", "George Orwell", 328, false);

displayBooks();