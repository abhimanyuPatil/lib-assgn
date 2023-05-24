import readline from "readline";
import { LibraryGenerator } from "./class/LibraryGenerator";
import { SelectedLibrary } from "./class/SelectedLibrary";
import { Books, LibraryName } from "./interfaces";
import { User } from "./class/User";
import { Book } from "./class/Book";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayLibraries() {
  console.log("\n");
  console.log(`A. Library with books`);
  console.log(`B. Library with no books`);
  console.log("\n");
  console.log("E. Exit");
  rl.question("\n Select Library", (choice: string) => {
    switch (choice) {
      case "A":
        initiateLibrary("A");
        break;
      case "B":
        initiateLibrary("B");
        break;
      case "E":
        showMenu();
      default:
        console.log("Invalid choice");
        displayLibraries();
    }
  });
}

function userBorrowBook(index: number) {
  const lib = SelectedLibrary.getInstance();
  const books = lib.getBooks();
  const user = User.getInstance();
  if (user.borrowedBooks.length > 2) {
    console.log("\n ❌ You can borrow 2 books at a time");
    displayBooks();
    return;
  }
  const book = books.find((_, i) => i === index - 1) as Book;
  user.addBook(book);
  lib.borrowBook(index);
}

function getBookId(choice: string) {
  const lib = SelectedLibrary.getInstance();
  const books = lib.getBooks();
  const user = User.getInstance();

  if (isNaN(Number(choice)) || Number(choice) > books.length) {
    console.log("❌ Invalid choice");
    displayBooks();
    return;
  }

  if (user.borrowedBooks.length < 2) {
    userBorrowBook(Number(choice));
    displayBooks();
  } else {
    console.log("\n ❌ You can borrow 2 books at a time");
    displayBooks();
  }
}

function displayUserBorrowedBook() {
  const user = User.getInstance();

  if (user.borrowedBooks.length > 0) {
    console.log("Borrowed books 👇🏻");
    user.borrowedBooks.forEach((b, i) => {
      console.log(`•( ${i + 1} ) 📖 ${b.name} by ${b.author}`);
    });

    displayBooks();
  } else {
    console.log("\n No books borrowed yet.");
    displayBooks();
  }
}

function displayBooksMenu() {
  rl.question("\n\n Enter book number to borrow", (choice: string) => {
    switch (choice.toLowerCase()) {
      case "e":
        rl.close();
        break;
      case "v":
        displayUserBorrowedBook();
        break;
      default:
        getBookId(choice);
        break;
    }
  });
}

function displayBooks() {
  const lib = SelectedLibrary.getInstance();
  const books = lib.getBooks();
  if (books.length > 0) {
    console.log("\n Books in Library 👇🏻");
    books.forEach((b, i) => {
      console.log(`•( ${i + 1} ) 📖 ${b.name} by ${b.author}`);
    });
    console.log("\n V. View borrowed books 📖");
    console.log("\n E. Exit");

    displayBooksMenu();
  } else {
    console.log("❌ No books in this library");
    rl.close();
  }
}

function initiateLibrary(lib: LibraryName) {
  const libAgg = LibraryGenerator.getInstance(lib);
  console.log(`👍🏻 Welcome to ${libAgg.name}`);
  new User();
  displayBooks();
}

// Function to display the menu options
function showMenu() {
  console.log("\n");
  console.log("1. Select Library");
  console.log("2. Exit");
  rl.question("\n\nEnter your choice: ", (choice: string) => {
    switch (choice) {
      case "1":
        displayLibraries();
        break;
      case "2":
        rl.close();
        break;
      default:
        console.log("❌ Invalid choice!");
        showMenu();
        break;
    }
  });
}

// Start the application
console.log(
  "Library Management Console Application",
  SelectedLibrary.getInstance()
);
showMenu();
