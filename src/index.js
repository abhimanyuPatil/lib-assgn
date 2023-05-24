"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = __importDefault(require("readline"));
var LibraryGenerator_1 = require("./class/LibraryGenerator");
var SelectedLibrary_1 = require("./class/SelectedLibrary");
var User_1 = require("./class/User");
var rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function displayLibraries() {
    console.log("\n");
    console.log("A. Library with books");
    console.log("B. Library with no books");
    console.log("\n");
    console.log("E. Exit");
    rl.question("\n Select Library", function (choice) {
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
function userBorrowBook(index) {
    var lib = SelectedLibrary_1.SelectedLibrary.getInstance();
    var books = lib.getBooks();
    var user = User_1.User.getInstance();
    if (user.borrowedBooks.length > 2) {
        console.log("\nYou can borrow 2 books at a time");
        displayBooks();
        return;
    }
    var book = books.find(function (_, i) { return i === index - 1; });
    user.addBook(book);
    lib.borrowBook(index);
}
function getBookId(choice) {
    var lib = SelectedLibrary_1.SelectedLibrary.getInstance();
    var books = lib.getBooks();
    var user = User_1.User.getInstance();
    if (isNaN(Number(choice)) || Number(choice) > books.length) {
        console.log("Invalid choice");
        displayBooks();
        return;
    }
    if (user.borrowedBooks.length < 2) {
        userBorrowBook(Number(choice));
        displayBooks();
    }
    else {
        console.log("\n You can borrow 2 books at a time");
        displayBooks();
    }
}
function displayUserBorrowedBook() {
    var user = User_1.User.getInstance();
    if (user.borrowedBooks.length > 0) {
        console.log("Borrowed books 👇🏻");
        user.borrowedBooks.forEach(function (b, i) {
            console.log("\u2022( ".concat(i + 1, " ) \uD83D\uDCD6 ").concat(b.name, " by ").concat(b.author));
        });
        displayBooks();
    }
    else {
        console.log("\n No books borrowed yet.");
        displayBooks();
    }
}
function displayBooksMenu() {
    rl.question("\n\n Enter book number to borrow", function (choice) {
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
    var lib = SelectedLibrary_1.SelectedLibrary.getInstance();
    var books = lib.getBooks();
    if (books.length > 0) {
        console.log("\n Books in Library 👇🏻");
        books.forEach(function (b, i) {
            console.log("\u2022( ".concat(i + 1, " ) \uD83D\uDCD6 ").concat(b.name, " by ").concat(b.author));
        });
        console.log("\n V. View borrowed books 📖");
        console.log("\n E. Exit");
        displayBooksMenu();
    }
    else {
        console.log("No books in this library");
        rl.close();
    }
}
function initiateLibrary(lib) {
    var libAgg = LibraryGenerator_1.LibraryGenerator.getInstance(lib);
    console.log("Welcome to ".concat(libAgg.name));
    new User_1.User();
    displayBooks();
}
// Function to display the menu options
function showMenu() {
    console.log("\n");
    console.log("1. Select Library");
    console.log("2. Exit");
    rl.question("\n\nEnter your choice: ", function (choice) {
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
console.log("Library Management Console Application", SelectedLibrary_1.SelectedLibrary.getInstance());
showMenu();
