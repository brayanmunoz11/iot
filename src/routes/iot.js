const express = require("express");
const router = express.Router();

const data = require("../sample.json");




router.get("/publicar", async (req, res,next) => {
  try{
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
    const databody = {
      temperatura,
      humedad
    };

    data[0].temperatura = databody.temperatura;
    data[0].humedad = databody.temperatura;
    
    console.log(data)

    res.status(200).json({
      message:"Data updated"
    })
  
  } catch (error) {
    console.log(error)
    next(error)
  }

});



module.exports = router;