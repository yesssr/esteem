app.get("/attendance:nis", (req, res) => {
  connection.query(`SELECT * FROM attendance where nis = '${req.params.nis}'`, (error, result) => {
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

app.post("/attendance:nis", (req, res) => {
  let attendance = {
    id: '',
    nis_student: req.params.nis,
    tanggal_absen: req.body.tanggal_absen,
    foto: req.body.foto
  }
  connection.query("INSERT INTO attendance SET ?", attendance, (error, result) => {
    if(error) {
      res.status(500).json({
        success: false,
        results: result
      });
    } else {
      res.status(200).json({
        success: true,
        results: result
      });
    }
  })
});