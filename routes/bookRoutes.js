const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Book = require('../models/Book.js');

//get books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).send('Error retreiving books')
  }
});

//add book
router.post('/add', async (req, res) => {
  try {
    const newBook = new Book({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      published_year: req.body.published_year
    });

    await newBook.save({ wtimeout: 30000 });
    res.status(200).json('Book added successfully');
  } catch (err) {
    res.status(500).send(`error is ${err.message}`);
  }
});

//update books
router.put('/update/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      res.status(404).send('No book found');
    }

    book.title = req.body.title,
    book.author = req.body.author,
    book.genre = req.body.genre,
    book.published_year = req.body.published_year

    await book.save();
    res.status(200).send('Books Updated')
  } catch(err) {
    console.error(err.message);
    res.status(500).send("Cannot update books");
  }
});

//delete books
router.delete('/delete/:id', async (req, res) => {
  try {
    const book_id = req.params.id;
    await Book.deleteOne({_id: book_id});
    res.status(200).send("Book successfully removed");
  } catch(err) {
    console.error(err.message);
    res.status(500).send("Cannot delete book right now");
  }
});

module.exports = router;



