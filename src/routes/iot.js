const express = require("express");
const router = express.Router();
const pool = require("../database");

router.get("/publicar", async (req, res,next) => {
  try{
    const data = await pool.query("SELECT * FROM data");
    res.status(200).json({
      data: data[0]
    })

  }catch(error){
    console.log(error)
    next(error)
  }

  

  
});

router.post("/publicar/:iddata", async (req, res,next) => {

  try {
    const { iddata } = req.params;
    const { temperatura, humedad} = req.body;
    const data = {
      temperatura,
      humedad
    };

    console.log(data);
    await pool.query("update data set ? where idLibro = 1", [actLibro, iddata]);

    res.status(200).json({
    message:"Data updated"
    })
  
  } catch (error) {
    console.log(error)
    next(error)
  }

});



module.exports = router;