const db = require("../config/db"); // Import koneksi database

// Controller untuk menampilkan daftar hewan
exports.getAnimals = (req, res) => {
  const sql = "SELECT * FROM animals";
  db.query(sql, (err, results) => {
      if (err) {
          console.error(err);
          res.status(500).send("Error fetching animals");
      } else {
          res.render("index", { animals: results });
      }
  });
};

// Controller untuk menambahkan hewan baru
exports.addAnimal = (req, res) => {
  const { name, species, age, cage_number } = req.body;
  const sql = "INSERT INTO animals (name, species, age, cage_number) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, species, age, cage_number], (err, result) => {
      if (err) {
          console.error(err);
          res.status(500).send("Error adding animal");
      } else {
          res.redirect("/");
      }
  });
};

// Controller untuk mengedit data hewan
exports.editAnimal = (req, res) => {
  const { name, species, age, cage_number } = req.body;
  const id = req.params.id;
  const sql = "UPDATE animals SET name = ?, species = ?, age = ?, cage_number = ? WHERE id = ?";
  db.query(sql, [name, species, age, cage_number, id], (err, result) => {
      if (err) {
          console.error(err);
          res.status(500).send("Error editing animal");
      } else {
          res.redirect("/");
      }
  });
};

// Controller untuk menghapus data hewan
exports.deleteAnimal = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM animals WHERE id = ?";
  db.query(sql, [id], (err, result) => {
      if (err) {
          console.error(err);
          res.status(500).send("Error deleting animal");
      } else {
          res.redirect("/");
      }
  });
};
