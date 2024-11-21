const express = require("express");
const router = express.Router();
const animalController = require("../controllers/animalController");

// Route untuk menampilkan daftar hewan
router.get("/", animalController.getAnimals);

// Route untuk menambahkan hewan baru
router.post("/add", animalController.addAnimal);

// Route untuk mengedit data hewan
router.post("/edit/:id", animalController.editAnimal);

// Route untuk menghapus data hewan
router.post("/delete/:id", animalController.deleteAnimal);

module.exports = router;
