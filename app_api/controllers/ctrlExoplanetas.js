
var mongoose = require('mongoose');
var modelApp = mongoose.model('Exoplanetas');

var sendJsonResponse = function(res,status,content){
  res.status(status);
  res.json(content);
}

  module.exports.ExoplanetaGet = function(req, res) { 
    modelApp
          .find()
          .select('nombre descubrimiento distancia constelacion info1 info2 imagepath')
          .exec(function(err,Exoplaneta){
            if(!Exoplaneta){
            sendJsonResponse(res, 404, {"mensaje":"Exoplaneta  no existe"});
            return;
          }else if (err){
            sendJsonResponse(res, 404, err);
            return;
          }
          sendJsonResponse(res, 200, Exoplaneta);

          });
  };

  
  module.exports.crearExoplaneta = function(req, res) { 
  modelApp.create({nombre:req.body.nombre,
                   masa:req.body.masa, 
                   estrella:req.body.estrella, 
                   galaxia:req.body.galaxia},function(err,Exoplaneta){
                    if(!Exoplaneta){
                    sendJsonResponse(res, 404, {"mensaje":"ERROR"});
                    return;
                  }else if (err){
                    sendJsonResponse(res, 404, err);
                    return;
                  }
                  sendJsonResponse(res, 200, {"status":"success"});
                  });
  };


  module.exports.ExoplanetaGetOne = function(req, res) { 
    if(req.params&&req.params.ExoplanetaId){
      modelApp
        .findById(req.params.ExoplanetaId)
        .exec(function(err, Exoplaneta){
          if(!Exoplaneta){
            sendJsonResponse(res, 404, {"mensaje":"Exoplaneta  no existe"});
            return;
          }else if (err){
            sendJsonResponse(res, 404, err);
            return;
          }
          sendJsonResponse(res, 200, Exoplaneta);
        });
    } else {
      sendJsonResponse(res, 404, {"mensaje":"No Exoplanetaid en request"});
    }
  };
  

  module.exports.ExoplanetaUpdateOne = function(req, res) {
  sendJsonResponse(res, 200, {"status":"success"});
   };
  
  
  module.exports.ExoplanetaBorrarOne = function(req, res) {
    var Exoplanetaid = req.params.ExoplanetaId;
    if(Exoplanetaid){modelApp.findByIdAndDelete(Exoplanetaid)};
    sendJsonResponse(res, 200, {"status":"success"});
   };

  



 