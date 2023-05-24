import { books } from "../constants";
import { ILibrary, LibraryName } from "../interfaces";
import { Book } from "./Book";
import { SelectedLibrary } from "./SelectedLibrary";

export class LibraryGenerator {
  static getInstance(libName: LibraryName): ILibrary {
    return libName === "A"
      ? new SelectedLibrary(
          books.map((b) => new Book(b.name, b.name)),
          "Library with books"
        )
      : new SelectedLibrary([], "Library with no books");
  }
}
