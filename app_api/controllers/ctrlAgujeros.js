
var mongoose = require('mongoose');
var modelApp = mongoose.model('Agujeros');

var sendJsonResponse = function(res,status,content){
  res.status(status);
  res.json(content);
}

  module.exports.AgujeroGet = function(req, res) { 
    modelApp
          .find()
          .select('nombre distancia constelacion info1 info2 imagePath')
          .exec(function(err,agujero){
            if(!agujero){
            sendJsonResponse(res, 404, {"mensaje":"Agujero negro no existe"});
            return;
          }else if (err){
            sendJsonResponse(res, 404, err);
            return;
          }
          sendJsonResponse(res, 200, agujero);

          });
  };

  
  module.exports.crearAgujeroNegro = function(req, res) { 
  modelApp.create({nombre:req.body.nombre,
                   masa:req.body.masa},function(err,agujero){
                    if(!agujero){
                    sendJsonResponse(res, 404, {"mensaje":"ERROR"});
                    return;
                  }else if (err){
                    sendJsonResponse(res, 404, err);
                    return;
                  }
                  sendJsonResponse(res, 200, {"status":"success"});
                  });
  };


  module.exports.AgujeroNegroGetOne = function(req, res) { 
    if(req.params&&req.params.agujeroNegroId){
      modelApp
        .findById(req.params.agujeroNegroId)
        .exec(function(err, agujero){
          if(!agujero){
            sendJsonResponse(res, 404, {"mensaje":"Agujero negro no existe"});
            return;
          }else if (err){
            sendJsonResponse(res, 404, err);
            return;
          }
          sendJsonResponse(res, 200, agujero);
        });
    } else {
      sendJsonResponse(res, 404, {"mensaje":"No Agujeroid en request"});
    }
  };
  

  module.exports.agujeroUpdateOne = function(req, res) {
  sendJsonResponse(res, 200, {"status":"success"});
   };
  
  
  module.exports.agujeroNegroBorrarOne = function(req, res) {
    var agujeroid = req.params.agujeroNegorId;
    if(agujeroid){modelApp.findByIdAndDelete(agujeroid)};
    sendJsonResponse(res, 200, {"status":"success"});
   };

  



 