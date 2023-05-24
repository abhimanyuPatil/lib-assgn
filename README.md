
# Library Management

Simple Nodejs based console app for Library Management using Readline.




## Acknowledgements

 - [Readline](https://nodejs.org/api/readline.html)
 


## Run Locally

Clone the project

```bash
  git clone https://github.com/abhimanyuPatil/lib-assgn.git
```

Go to the project directory

```bash
  cd lib-assgn
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Documentation
 Covering first 2 scenarios from the assignment document.


 `LibraryGenerator` is reponsible for creating single instance of `SelectedLibrary` which extends `Library` class

`SelectedLibrary` is a singleton class. This ensures that there is a single Library class used across.

`User` class is also a singleton class which ensures single user login

`LibraryGenerator` is a factory class which creates a `Library` based on the input for `Library` with books or no books
 
 Whenever app starts, based on the user input `LibraryGenerator` will initiate a `SelectedLibrary` class with books or no books as well as `User` class.

Instance of `SelectedLibrary` and  `User` class is used across for accessing values and methods.



