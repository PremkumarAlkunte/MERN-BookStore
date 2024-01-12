import express  from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router()

//route to save a new book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route for get all books from database
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});

    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route for get one book from database by id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    //    console.log("🚀 ~ file: index.js:61 ~ app.get ~ id:", id)
    const book = await Book.findById(id);

    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// route to update the book
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const id = req.params.id;

    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(400).json({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book updated succesfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route for delete a book

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const result = await Book.findByIdAndDelete(id, req.body);

    if (!result) {
      return res.status(400).json({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book Deleted succesfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export default router;
