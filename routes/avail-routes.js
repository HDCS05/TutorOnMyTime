var db = require("../models");

module.exports = function(app) {
  console.log('working??')



  app.get("/choose", function(req, res){
      

      res.send("Done");
      db.availability.findAll({})
      
      .then(function(results){
        console.log(results)
      }).catch(function(err){
      res.json(err);

    
    });

  });


}
