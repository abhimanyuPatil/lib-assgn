import readline from "readline";
import { Library } from "./class/Library";
import { LibraryGenerator } from "./class/LibraryGenerator";
import { User } from "./class/User";
import { Books, LibraryName } from "./interfaces";

export class Session {
  rl: readline.Interface;
  selectedLibrary!: Library;
  constructor(rlInstance: readline.Interface) {
    this.rl = rlInstance;
    this.showMenu();
  }

  showMenu() {
    console.log("\n");
    console.log("1. Select Library");
    console.log("2. Exit");
    this.rl.question("\n\nEnter your choice: ", (choice: string) => {
      switch (choice) {
        case "1":
          this.displayLibraries();
          break;
        case "2":
          this.rl.close();
          break;
        default:
          console.log("❌ Invalid choice!");
          this.showMenu();
          break;
      }
    });
  }

  displayLibraries() {
    console.log("\n");
    console.log(`A. Library with books`);
    console.log(`B. Library with no books`);
    console.log("\n");
    console.log("E. Exit");
    this.rl.question("\n Select Library", (choice: string) => {
      switch (choice) {
        case "A":
          this.initiateLibrary("A");
          break;
        case "B":
          this.initiateLibrary("B");
          break;
        case "E":
          this.showMenu();
          break;
        default:
          console.log("Invalid choice");
          this.displayLibraries();
      }
    });
  }

  initiateLibrary(lib: LibraryName) {
    const libAgg = LibraryGenerator.getInstance(lib);
    this.selectedLibrary = libAgg;
    console.log(`👍🏻 Welcome to ${libAgg.name}`);
    new User();
    this.displayBooks();
  }

  displayBooks() {
    // const lib = SelectedLibrary.getInstance();
    const books = this.selectedLibrary.getBooks();
    if (books.length > 0) {
      console.log("\n Books in Library 👇🏻");
      books.forEach((b, i) => {
        console.log(`•( ${i + 1} ) 📖 ${b.name} by ${b.author}`);
      });
      console.log("\n V. View borrowed books 📖");
      console.log("\n E. Exit");

      this.displayBooksMenu();
    } else {
      console.log("❌ No books in this library");
      this.rl.close();
    }
  }
  displayBooksMenu() {
    this.rl.question("\n\n Enter book number to borrow", (choice: string) => {
      switch (choice.toLowerCase()) {
        case "e":
          this.rl.close();
          break;
        case "v":
          this.displayUserBorrowedBook();
          break;
        default:
          this.getBookId(choice);
          break;
      }
    });
  }

  getBookId(choice: string) {
    // const lib = SelectedLibrary.getInstance();
    const books = this.selectedLibrary.getBooks();
    const user = User.getInstance();

    if (isNaN(Number(choice)) || Number(choice) > books.length) {
      console.log("❌ Invalid choice");
      this.displayBooks();
      return;
    }

    if (user.borrowedBooks.length < 2) {
      this.userBorrowBook(Number(choice));
      this.displayBooks();
    } else {
      console.log("\n ❌ You can borrow 2 books at a time");
      this.displayBooks();
    }
  }

  displayUserBorrowedBook() {
    const user = User.getInstance();

    if (user.borrowedBooks.length > 0) {
      console.log("Borrowed books 👇🏻");
      user.borrowedBooks.forEach((b, i) => {
        console.log(`•( ${i + 1} ) 📖 ${b.name} by ${b.author}`);
      });

      this.displayBooks();
    } else {
      console.log("\n No books borrowed yet.");
      this.displayBooks();
    }
  }

  userBorrowBook(index: number) {
    // const lib = SelectedLibrary.getInstance();
    const books = this.selectedLibrary.getBooks();
    const user = User.getInstance();
    if (user.borrowedBooks.length > 2) {
      console.log("\n ❌ You can borrow 2 books at a time");
      this.displayBooks();
      return;
    }
    const book = books.find((_, i) => i === index - 1) as Books;
    user.addBook(book);
    this.selectedLibrary.borrowBook(index);
  }
}
