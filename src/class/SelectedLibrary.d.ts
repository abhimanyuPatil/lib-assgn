import { Books } from "../interfaces";
import { Library } from "./Library";
export declare class SelectedLibrary extends Library {
    private static instance;
    constructor(books: Books[], name: string);
    static getInstance(): SelectedLibrary;
}
