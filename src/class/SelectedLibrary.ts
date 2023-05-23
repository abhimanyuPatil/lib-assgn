import { Books } from "../interfaces";
import { Library } from "./Library";

export class SelectedLibrary extends Library {
  private static instance: SelectedLibrary;
  constructor(books: Books[], name: string) {
    super(books, name);
    if (SelectedLibrary.instance) {
      return SelectedLibrary.instance;
    }
    SelectedLibrary.instance = this;
  }

  static getInstance(): SelectedLibrary {
    return this.instance;
  }
}
