import readline from "readline";
import { LibraryGenerator } from "./class/LibraryGenerator";
import { SelectedLibrary } from "./class/SelectedLibrary";
import { Books, LibraryName } from "./interfaces";
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

function getBookId(choice: string) {
  const lib = SelectedLibrary.getInstance();
  const books = lib.getBooks();
  if (isNaN(Number(choice)) || Number(choice) > books.length) {
    console.log("Invalid choice");
    displayBooks();
    return;
  }

  lib.borrowBook(Number(choice));
  displayBooks();
}

function displayBooksMenu() {
  console.log("\n\n");
  rl.question("\n\n Enter book number to borrow", (choice: string) => {
    if (choice === "e" || "E") {
      rl.close();
    } else {
      getBookId(choice);
    }
  });
}

function displayBooks() {
  const lib = SelectedLibrary.getInstance();
  const books = lib.getBooks();
  if (books.length > 0) {
    console.log("Here are the books");
    books.forEach((b, i) => {
      console.log(`•( ${i + 1} ) 📖 ${b.name} by ${b.author}`);
    });

    console.log("\n  Exit");
  } else {
    console.log("No books in this library");
    displayLibraries();
  }

  displayBooksMenu();
}

function initiateLibrary(lib: LibraryName) {
  const libAgg = LibraryGenerator.getInstance(lib);
  console.log(`Welcome to ${libAgg.name}`);
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
        console.log("Invalid choice!");
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
