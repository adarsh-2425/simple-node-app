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

module.exports = router;



