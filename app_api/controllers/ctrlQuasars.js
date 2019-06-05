
var mongoose = require('mongoose');
var modelApp = mongoose.model('Quasars');

var sendJsonResponse = function(res,status,content){
  res.status(status);
  res.json(content);
}

  module.exports.QuasarGet = function(req, res) { 
    modelApp
          .find()
          .select('nombre distancia año constelacion declinacion info1 info2 imagePath')
          .exec(function(err,Quasar){
            if(!Quasar){
            sendJsonResponse(res, 404, {"mensaje":"Quasar  no existe"});
            return;
          }else if (err){
            sendJsonResponse(res, 404, err);
            return;
          }
          sendJsonResponse(res, 200, Quasar);

          });
  };

  
  module.exports.crearQuasar = function(req, res) { 
  modelApp.create({nombre:req.body.nombre,
                   distancia:req.body.distancia,
                   año:req.body.año, 
                   potencia:req.body.potencia },function(err,Quasar){
                    if(!Quasar){
                    sendJsonResponse(res, 404, {"mensaje":"ERROR"});
                    return;
                  }else if (err){
                    sendJsonResponse(res, 404, err);
                    return;
                  }
                  sendJsonResponse(res, 200, {"status":"success"});
                  });
  };


  module.exports.QuasarGetOne = function(req, res) { 
    if(req.params&&req.params.QuasarId){
      modelApp
        .findById(req.params.QuasarId)
        .exec(function(err, Quasar){
          if(!Quasar){
            sendJsonResponse(res, 404, {"mensaje":"Quasar  no existe"});
            return;
          }else if (err){
            sendJsonResponse(res, 404, err);
            return;
          }
          sendJsonResponse(res, 200, Quasar);
        });
    } else {
      sendJsonResponse(res, 404, {"mensaje":"No Quasarid en request"});
    }
  };
  

  module.exports.QuasarUpdateOne = function(req, res) {
  sendJsonResponse(res, 200, {"status":"success"});
   };
  
  
  module.exports.QuasarBorrarOne = function(req, res) {
    var Quasarid = req.params.QuasarId;
    if(Quasarid){modelApp.findByIdAndDelete(Quasarid)};
    sendJsonResponse(res, 200, {"status":"success"});
   };

  



 