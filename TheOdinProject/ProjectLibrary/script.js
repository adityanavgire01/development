
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

addBookToLibrary("The Hobbit", "J. R. R. Tolkien", 310, true);
addBookToLibrary("1984", "George Orwell", 328, false);

console.log(myLibrary)