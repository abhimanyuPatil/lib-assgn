/// <reference types="node" />
import readline from "readline";
import { Library } from "./class/Library";
import { LibraryName } from "./interfaces";
export declare class Session {
    rl: readline.Interface;
    selectedLibrary: Library;
    constructor(rlInstance: readline.Interface);
    showMenu(): void;
    displayLibraries(): void;
    initiateLibrary(lib: LibraryName): void;
    displayBooks(): void;
    displayBooksMenu(): void;
    getBookId(choice: string): void;
    displayUserBorrowedBook(): void;
    userBorrowBook(index: number): void;
}
