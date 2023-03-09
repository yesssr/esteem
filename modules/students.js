app.get("/student", (req, res) => {
  connection.query("SELECT * FROM esteem.students", (error, result) => {
    if (error) {
      res.status(500).json({
        success: false,
        results: error
      });
    } else {
      res.status(200).json({
        success: true,
        results: result
      });
    }
  })
});

app.post("/students", (req, res) => {
  let data = {
    nis: req.body.nis,
    nama: req.body.nama,
    kelas: req.body.kelas,
    jenis_kelamin: req.body.jenis_kelamin,
    password: req.body.password,
    foto: req.body.foto
  }

  connection.query("INSERT INTO students SET ?", data, (error, result) => {
    if(error) {
      res.status(500).json({
        success: false,
        results: error
      });
    } else {
      res.status(200).json({
        success: true,
        results: result
      });
    }
  })
});

app.get("/students:nis", (req, res) => {
  connection.query(`SELECT *FROM students where nis = '${req.params.nis}'`, (error, result) => {
    if(error) {
      res.status(500).json({
        success: false,
        results: error
      });
    } else {
      res.status(200).json({
        success: true,
        result: results
      });
    }
  })
});