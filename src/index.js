"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//=========================================
// import readline from "readline";
var readline = require("readline");
var constants_1 = require("./constants");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var instance;
var Library = /** @class */ (function () {
    function Library(books, name) {
        if (instance) {
            throw new Error("New instance cannot be created!!");
        }
        instance = this;
        this.books = books;
        this.name = name;
    }
    Library.prototype.getBooks = function () {
        return this.books;
    };
    Library.prototype.borrowBook = function (index) {
        this.books.splice(index);
        console.log("Borrowed");
        return "Borrowed!";
    };
    return Library;
}());
var SelectedLibrary = /** @class */ (function (_super) {
    __extends(SelectedLibrary, _super);
    function SelectedLibrary(books, name) {
        var _this = _super.call(this, books, name) || this;
        if (instance) {
            return instance;
        }
        instance = _this;
        return _this;
    }
    SelectedLibrary.getInstance = function () {
        return this.instance;
    };
    return SelectedLibrary;
}(Library));
var LibraryAggregator = /** @class */ (function () {
    function LibraryAggregator() {
    }
    LibraryAggregator.getInstance = function (libName) {
        return libName === "A"
            ? new SelectedLibrary(constants_1.books, "Library with books")
            : new SelectedLibrary([], "Library with no books");
    };
    return LibraryAggregator;
}());
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
function getBookId() {
    var lib = SelectedLibrary.getInstance();
    console.log("lib==", lib);
    var books = lib.getBooks();
    rl.question("\n Enter book number", function (choice) {
        console.log("choice", choice, typeof choice);
        if (isNaN(Number(choice)) || Number(choice) > books.length) {
            console.log("Invalid choice");
            displayBooks(books);
            displayBooksMenu();
            return;
        }
        lib.borrowBook(Number(choice));
    });
}
function displayBooksMenu() {
    console.log("\n\n1. Borrow Book");
    rl.question("\n Select your choice", function (choice) {
        switch (choice) {
            case "1":
                getBookId();
                break;
            default:
                console.log("Invalid choice");
                console.log("E. Exit");
        }
    });
}
function displayBooks(books) {
    books.forEach(function (b, i) {
        console.log("".concat(i + 1, ". ").concat(b.name, " by ").concat(b.author));
    });
    displayBooksMenu();
}
function initiateLibrary(lib) {
    var libAgg = LibraryAggregator.getInstance(lib);
    console.log("Welcome to ".concat(libAgg.name));
    var books = libAgg.getBooks();
    if (books.length > 0) {
        console.log("Here are the books");
        displayBooks(books);
    }
    else {
        console.log("No books in this library");
        displayLibraries();
    }
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
console.log("Library Management Console Application", SelectedLibrary.getInstance());
showMenu();
