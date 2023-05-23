import { books } from "../constants";
import { ILibrary, LibraryName } from "../interfaces";
import { SelectedLibrary } from "./SelectedLibrary";

export class LibraryGenerator {
  static getInstance(libName: LibraryName): ILibrary {
    return libName === "A"
      ? new SelectedLibrary(books, "Library with books")
      : new SelectedLibrary([], "Library with no books");
  }
}
