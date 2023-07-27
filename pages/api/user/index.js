const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

export default function handler(req, res) {
  /*------------------------------------------------------------------*/
  const { studentid, firstname, lastname, username, password, status } = req.body;
  if (req.method === "GET") {
    try {
      connection.query(
        "SELECT * FROM `tbl_user`",
        function (err, results, fields) {
          res.status(200).json({ user: results });
        }
      );
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
    /*------------------------------------------------------------------*/
  } else if (req.method === "POST") {
    try {
      const results = connection.query("INSERT INTO tbl_user SET ?", {
        studentid,
        firstname,
        lastname,
        username,
        password,
        status,
      });
      return res.status(200).json({ "status": "ok", "message":req.body, id: results.insertId });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
    /*------------------------------------------------------------------*/
  } else if (req.method === 'PUT') {

    try{
    const result = connection.query("UPDATE tbl_user SET ? WHERE id = ?",[
      req.body,
      req.body.id,
    ]);

    return res.status(200).json({ ...req.body, id: result.insertId});

  } catch (error){
    return res.status(500).json({ message: error.message });
  }


  } else{

    try{
      const result = connection.query("DELETE FROM tbl_user WHERE id = ?",[req.query.id]);
  
      return res.status(200).json({ ...req.body, id: result.insertId});
  
    } catch (error){
      return res.status(500).json({ message: error.message });
    }
    
  }

}