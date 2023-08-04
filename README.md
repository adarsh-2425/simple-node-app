# Simple CRUD Node.js App with MongoDB and Pug

This is a basic Node.js application that demonstrates CRUD (Create, Read, Update, Delete) operations. It uses MongoDB as the database and Mongoose ODM for data modeling and interaction. The app is built with the Express framework and renders HTML using Pug templates.

## Prerequisites

Before running the app, ensure you have the following installed:

- Node.js (https://nodejs.org)
- MongoDB (https://www.mongodb.com)

## Installation

1. Clone this repository:

git clone https://github.com/yourusername/your-node-crud-app.git


2. Change into the project directory:

cd your-node-crud-app


3. Install dependencies:

npm install 


## Configuration

1. **Update Server Address:**

   The server address is currently set to a replit hosting address, which may not work if you are hosting the app on 'http://localhost:3000'. Ensure you update the server address in `index.js` to match your localhost address or replit address.

   ```pug
   //example
   // Anchor link to the Add Book Page
    a(href="https://siennastupendousupgrades.adarsh-2425.repl.co/books/add") Add Book
as
// Anchor link to the Add Book Page
    a(href="http://localhost:3000/books/add") Add Book



## Usage

To start the server, run:

npm start


Visit `http://localhost:3000` in your browser to access the app.

## Functionality

The app allows you to:

- Create new books with a title, author, genre, and published year.
- Read the list of existing books.
- Update book information.
- Delete books from the collection.

## Technology Stack

- Node.js
- Express
- MongoDB
- Mongoose
- Pug (formerly known as Jade)

## Folder Structure

- `index.js`: Entry point of the application.
- `views/`: Contains Pug templates for rendering HTML.
- `models/`: Defines the Mongoose data model for books.
- `routes/`: Contains Express route handlers.

## Credits

This project was created as part of a learning exercise and is maintained by [Adarsh S](https://github.com/adarsh-2425).

## License

[MIT License](LICENSE)
