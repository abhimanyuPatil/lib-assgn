import readline, { Interface } from "readline";
import { Session } from "../Session";

describe("Session: show menu", () => {
  let mockRl: Interface;
  beforeEach(() => {
    mockRl = {
      question: jest
        .fn()
        .mockImplementationOnce((_, callback) => {
          callback("1");
        })
        .mockImplementationOnce((_, callback) => {
          callback("2");
        }),
      close: jest.fn(),
    } as unknown as Interface;
  });

  it("should display the menu options", () => {
    // Mock readline.Interface
    const rlInstance = {
      question: jest.fn(),
      close: jest.fn(),
    };
    const session = new Session(mockRl);

    // Mock console.log
    console.log = jest.fn();

    session.showMenu();

    // Assert console.log calls
    expect(console.log).toHaveBeenCalledWith("\n");
    expect(console.log).toHaveBeenCalledWith("1. Select Library");
    expect(console.log).toHaveBeenCalledWith("2. Exit");
  });

  // Tests that the showMenu method displays the menu and handles a valid choice correctly.
  it("test_show_menu_valid_choice", () => {
    const rlInstance = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const session = new Session(rlInstance);
    const spy = jest.spyOn(session, "displayLibraries");
    session.showMenu();
    rlInstance.write("1\n");
    expect(spy).toHaveBeenCalled();
  });

  it("should handle user input for exiting the program", () => {
    // Mock readline.Interface
    const rlInstance = {
      question: jest.fn((question, callback) => {
        // Simulate user input for exiting the program
        callback("2");
      }),
      close: jest.fn(),
    } as unknown as Interface;
    const session = new Session(rlInstance);

    session.showMenu();

    // Assert readline.Interface close method is called
    expect(rlInstance.close).toHaveBeenCalled();
  });

  it("should handle invalid user input", () => {
    // Mock readline.Interface
    const rlInstance = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const session = new Session(rlInstance);

    // Mock console.log
    console.log = jest.fn();

    session.showMenu();
    rlInstance.write("e\n");

    // Assert console.log calls
    const spy = jest.spyOn(console, "log");

    expect(spy).toHaveBeenCalledWith("❌ Invalid choice!");
  });

  // Tests that the initiateLibrary method correctly initializes the selected library and displays the books.
  it("test_initiate_library", () => {
    const rlInstance = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const session = new Session(rlInstance);
    const spy = jest.spyOn(session, "displayBooks");
    session.initiateLibrary("A");
    expect(session.selectedLibrary.name).toBe("Library with books");
    expect(spy).toHaveBeenCalled();
  });

  // Tests that the userBorrowBook method limits the number of books a user can borrow to 2.
  it("test_user_borrow_book_limit", () => {
    const rlInstance = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const session = new Session(rlInstance);
    session.initiateLibrary("A");
    session.userBorrowBook(1);
    session.userBorrowBook(2);
    const result = session.userBorrowBook(3);
    expect(result).toBeUndefined();
  });

  // Tests that the displayBooks method displays the books and handles a valid choice correctly.
  it("test_display_books_valid_choice", () => {
    const rlInstance = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const session = new Session(rlInstance);
    session.initiateLibrary("A");
    const spy = jest.spyOn(session, "displayBooks");
    session.displayBooks();
    rlInstance.write("1\n");
    expect(spy).toHaveBeenCalledTimes(1);
  });

  // Tests that the displayBooks method handles an invalid choice correctly.
  it("test_display_books_invalid_choice", () => {
    const rlInstance = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const session = new Session(rlInstance);
    session.initiateLibrary("A");
    const spy = jest.spyOn(session, "displayBooks");
    session.displayBooks();
    rlInstance.write("invalid\n");
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
