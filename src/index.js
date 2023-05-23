//=========================================
const fs = require("fs");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to display the menu options
function showMenu() {
  console.log("1. Display all books");
  console.log("2. Exit");

  rl.question("\nEnter your choice: ", (choice) => {
    switch (choice) {
      case "1":
        console.log("Show books");
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
console.log("Library Management Console Application");
showMenu();
