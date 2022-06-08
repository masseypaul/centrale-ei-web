const express = require("express");
const MovieModel = require("../models/movies");
const router = express.Router();

router.get("/", async function (req, res) {
  const AllMovies = await MovieModel.find({}).populate("viewers");
  res.status(201).json(AllMovies);
});

router.post("/new", async function (req, res) {
  // Create a new movie instance
  try {
    const newMovie = new MovieModel({
      title: req.body.title,
      date: req.body.date,
      url: req.body.url,
      desc: req.body.desc,
      viewers: req.body.viewers,
    });
    const createdMovie = await newMovie.save();
    res.status(201).json(createdMovie);
  } catch (error) {
    // Save the movie in database
    console.error(error);
    res.status(500).json({ message: "Error while creating the movie" });
  }
  /*newMovie
    .save()
    .then(function (createdMovie) {
      res.status(201).json(createdMovie);
    })
    .catch(function (error) {
      ;
    });*/
});

router.put("/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const filter = { _id: id };
    const update = req.body;
    let doc = await MovieModel.findOneAndUpdate(filter, update, { new: true });
    res.status(201).json(doc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error while creating the movie" });
  }
});

module.exports = router;
