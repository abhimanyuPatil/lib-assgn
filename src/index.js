"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = __importDefault(require("readline"));
var LibraryGenerator_1 = require("./class/LibraryGenerator");
var SelectedLibrary_1 = require("./class/SelectedLibrary");
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
function getBookId(choice) {
    var lib = SelectedLibrary_1.SelectedLibrary.getInstance();
    var books = lib.getBooks();
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
    rl.question("\n\n Enter book number to borrow", function (choice) {
        console.log("choice", choice);
        if (choice === "e" || "E") {
            console.log("in here");
            rl.close();
        }
        else {
            getBookId(choice);
        }
    });
}
function displayBooks() {
    var lib = SelectedLibrary_1.SelectedLibrary.getInstance();
    var books = lib.getBooks();
    if (books.length > 0) {
        console.log("Here are the books");
        books.forEach(function (b, i) {
            console.log("\u2022( ".concat(i + 1, " ) \uD83D\uDCD6 ").concat(b.name, " by ").concat(b.author));
        });
        console.log("\n  Exit");
    }
    else {
        console.log("No books in this library");
        displayLibraries();
    }
    displayBooksMenu();
}
function initiateLibrary(lib) {
    var libAgg = LibraryGenerator_1.LibraryGenerator.getInstance(lib);
    console.log("Welcome to ".concat(libAgg.name));
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
