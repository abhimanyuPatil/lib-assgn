"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
const Session_1 = require("./Session");
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// export function displayLibraries() {
//   console.log("\n");
//   console.log(`A. Library with books`);
//   console.log(`B. Library with no books`);
//   console.log("\n");
//   console.log("E. Exit");
//   rl.question("\n Select Library", (choice: string) => {
//     switch (choice) {
//       case "A":
//         initiateLibrary("A");
//         break;
//       case "B":
//         initiateLibrary("B");
//         break;
//       case "E":
//         showMenu();
//         break;
//       default:
//         console.log("Invalid choice");
//         displayLibraries();
//     }
//   });
// }
// export function userBorrowBook(index: number) {
//   const lib = SelectedLibrary.getInstance();
//   const books = lib.getBooks();
//   const user = User.getInstance();
//   if (user.borrowedBooks.length > 2) {
//     console.log("\n ❌ You can borrow 2 books at a time");
//     displayBooks();
//     return;
//   }
//   const book = books.find((_, i) => i === index - 1) as Book;
//   user.addBook(book);
//   lib.borrowBook(index);
// }
// export function getBookId(choice: string) {
//   const lib = SelectedLibrary.getInstance();
//   const books = lib.getBooks();
//   const user = User.getInstance();
//   if (isNaN(Number(choice)) || Number(choice) > books.length) {
//     console.log("❌ Invalid choice");
//     displayBooks();
//     return;
//   }
//   if (user.borrowedBooks.length < 2) {
//     userBorrowBook(Number(choice));
//     displayBooks();
//   } else {
//     console.log("\n ❌ You can borrow 2 books at a time");
//     displayBooks();
//   }
// }
// export function displayUserBorrowedBook() {
//   const user = User.getInstance();
//   if (user.borrowedBooks.length > 0) {
//     console.log("Borrowed books 👇🏻");
//     user.borrowedBooks.forEach((b, i) => {
//       console.log(`•( ${i + 1} ) 📖 ${b.name} by ${b.author}`);
//     });
//     displayBooks();
//   } else {
//     console.log("\n No books borrowed yet.");
//     displayBooks();
//   }
// }
// export function displayBooksMenu() {
//   rl.question("\n\n Enter book number to borrow", (choice: string) => {
//     switch (choice.toLowerCase()) {
//       case "e":
//         rl.close();
//         break;
//       case "v":
//         displayUserBorrowedBook();
//         break;
//       default:
//         getBookId(choice);
//         break;
//     }
//   });
// }
// export function displayBooks() {
//   const lib = SelectedLibrary.getInstance();
//   const books = lib.getBooks();
//   if (books.length > 0) {
//     console.log("\n Books in Library 👇🏻");
//     books.forEach((b, i) => {
//       console.log(`•( ${i + 1} ) 📖 ${b.name} by ${b.author}`);
//     });
//     console.log("\n V. View borrowed books 📖");
//     console.log("\n E. Exit");
//     displayBooksMenu();
//   } else {
//     console.log("❌ No books in this library");
//     rl.close();
//   }
// }
// export function initiateLibrary(lib: LibraryName) {
//   const libAgg = LibraryGenerator.getInstance(lib);
//   console.log(`👍🏻 Welcome to ${libAgg.name}`);
//   new User();
//   displayBooks();
// }
// Start the application
console.log("📖Library Management Console Application📖");
new Session_1.Session(rl);
